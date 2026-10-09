from fastapi import Depends, FastAPI, HTTPException, Response, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select
from sqlalchemy.orm import Session

from .config import get_settings
from .db import Base, engine, get_db
from .dependencies import admin_user, current_user
from .models import Conversation, Message, MessageRole, MoodEntry, Preference, User
from .schemas import (
    ConversationCreate, ConversationResponse, LoginRequest, MessageCreate, MessageResponse, MoodCreate, MoodResponse,
    PreferenceUpdate, UserCreate, UserResponse,
)
from .security import create_session_token, hash_password, verify_password

settings = get_settings()
app = FastAPI(title="Baymax API", version="0.1.0")
app.add_middleware(CORSMiddleware, allow_origins=[settings.frontend_origin], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])


@app.on_event("startup")
def create_tables_for_development() -> None:
    """Creates tables for local development; production should use Alembic migrations."""
    Base.metadata.create_all(bind=engine)


def set_session(response: Response, user: User) -> None:
    response.set_cookie("baymax_session", create_session_token(user.id), httponly=True, secure=settings.cookie_secure, samesite="lax", max_age=60 * 60 * 24 * 7)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/auth/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register(payload: UserCreate, response: Response, db: Session = Depends(get_db)) -> User:
    if db.scalar(select(User).where(User.email == payload.email.lower())):
        raise HTTPException(status_code=409, detail="An account with this email already exists")
    user = User(email=payload.email.lower(), password_hash=hash_password(payload.password))
    user.preference = Preference()
    db.add(user)
    db.commit()
    db.refresh(user)
    set_session(response, user)
    return user


@app.post("/api/auth/login", response_model=UserResponse)
def login(payload: LoginRequest, response: Response, db: Session = Depends(get_db)) -> User:
    user = db.scalar(select(User).where(User.email == payload.email.lower()))
    if not user or not verify_password(payload.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    set_session(response, user)
    return user


@app.post("/api/auth/logout", status_code=status.HTTP_204_NO_CONTENT)
def logout(response: Response) -> None:
    response.delete_cookie("baymax_session")


@app.get("/api/auth/me", response_model=UserResponse)
def me(user: User = Depends(current_user)) -> User:
    return user


@app.get("/api/moods", response_model=list[MoodResponse])
def list_moods(user: User = Depends(current_user), db: Session = Depends(get_db)) -> list[MoodEntry]:
    return list(db.scalars(select(MoodEntry).where(MoodEntry.user_id == user.id).order_by(MoodEntry.created_at.desc())))


@app.post("/api/moods", response_model=MoodResponse, status_code=status.HTTP_201_CREATED)
def create_mood(payload: MoodCreate, user: User = Depends(current_user), db: Session = Depends(get_db)) -> MoodEntry:
    entry = MoodEntry(user_id=user.id, **payload.model_dump())
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


@app.delete("/api/moods/{mood_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_mood(mood_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)) -> None:
    entry = db.scalar(select(MoodEntry).where(MoodEntry.id == mood_id, MoodEntry.user_id == user.id))
    if not entry:
        raise HTTPException(status_code=404, detail="Mood entry not found")
    db.delete(entry)
    db.commit()


@app.get("/api/conversations", response_model=list[ConversationResponse])
def list_conversations(user: User = Depends(current_user), db: Session = Depends(get_db)) -> list[Conversation]:
    return list(db.scalars(select(Conversation).where(Conversation.user_id == user.id).order_by(Conversation.updated_at.desc())))


@app.post("/api/conversations", response_model=ConversationResponse, status_code=status.HTTP_201_CREATED)
def create_conversation(payload: ConversationCreate, user: User = Depends(current_user), db: Session = Depends(get_db)) -> Conversation:
    conversation = Conversation(user_id=user.id, title=payload.title)
    db.add(conversation)
    db.commit()
    db.refresh(conversation)
    return conversation


@app.get("/api/conversations/{conversation_id}/messages", response_model=list[MessageResponse])
def list_messages(conversation_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)) -> list[Message]:
    conversation = db.scalar(select(Conversation).where(Conversation.id == conversation_id, Conversation.user_id == user.id))
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    return list(db.scalars(select(Message).where(Message.conversation_id == conversation.id).order_by(Message.created_at)))


@app.post("/api/conversations/{conversation_id}/messages", response_model=MessageResponse)
def add_message(conversation_id: str, payload: MessageCreate, user: User = Depends(current_user), db: Session = Depends(get_db)) -> Message:
    conversation = db.scalar(select(Conversation).where(Conversation.id == conversation_id, Conversation.user_id == user.id))
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    message = Message(conversation_id=conversation.id, role=MessageRole.USER, content=payload.content)
    db.add(message)
    db.commit()
    db.refresh(message)
    return message


@app.get("/api/admin/status")
def admin_status(_: User = Depends(admin_user)) -> dict[str, str]:
    return {"status": "connected", "message": "Server-side admin authorization is active"}
