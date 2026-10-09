from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field

from .models import MessageRole, MoodValue, UserRole


class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)


class LoginRequest(UserCreate):
    pass


class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: UUID
    email: EmailStr
    role: UserRole


class MoodCreate(BaseModel):
    mood: MoodValue
    tags: list[str] = Field(default_factory=list, max_length=12)
    note: str | None = Field(default=None, max_length=5000)


class MoodResponse(MoodCreate):
    model_config = ConfigDict(from_attributes=True)
    id: UUID
    created_at: datetime
    updated_at: datetime


class MessageCreate(BaseModel):
    content: str = Field(min_length=1, max_length=5000)


class MessageResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: UUID
    role: MessageRole
    content: str
    created_at: datetime


class ConversationResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: UUID
    title: str | None
    created_at: datetime
    updated_at: datetime


class ConversationCreate(BaseModel):
    title: str | None = Field(default=None, max_length=160)


class PreferenceUpdate(BaseModel):
    language: str = Field(default="English", max_length=32)
    communication_style: str = Field(default="Gentle and reflective", max_length=64)
    wellness_goals: list[str] = Field(default_factory=list, max_length=8)
