from uuid import UUID

from fastapi import Cookie, Depends, HTTPException, status
from sqlalchemy.orm import Session

from .db import get_db
from .models import User
from .security import read_session_token


def current_user(
    session_cookie: str | None = Cookie(default=None, alias="baymax_session"),
    db: Session = Depends(get_db),
) -> User:
    """Resolves and validates the signed session cookie on private endpoints."""
    user_id: UUID | None = read_session_token(session_cookie) if session_cookie else None
    user = db.get(User, user_id) if user_id else None
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Authentication required")
    return user


def admin_user(user: User = Depends(current_user)) -> User:
    """Requires the server-side administrator role."""
    if user.role != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Administrator access required")
    return user
