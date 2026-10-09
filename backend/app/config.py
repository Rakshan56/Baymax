from functools import lru_cache

from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Runtime configuration loaded from environment variables."""

    database_url: str = "postgresql+psycopg://baymax:change-me@localhost:5432/baymax"
    session_secret: SecretStr = SecretStr("development-only-change-me")
    frontend_origin: str = "http://localhost:5173"
    cookie_secure: bool = False
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")


@lru_cache
def get_settings() -> Settings:
    return Settings()
