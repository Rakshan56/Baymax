import base64
import hashlib
import hmac
import secrets
from uuid import UUID

from itsdangerous import BadSignature, URLSafeTimedSerializer

from .config import get_settings


def hash_password(password: str) -> str:
    """Hashes a password with PBKDF2-SHA256 and a per-password random salt."""
    salt = secrets.token_bytes(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 310_000)
    return f"pbkdf2_sha256$310000${base64.b64encode(salt).decode()}${base64.b64encode(digest).decode()}"


def verify_password(password: str, encoded: str) -> bool:
    """Constant-time verification for hashes produced by hash_password."""
    try:
        algorithm, rounds, salt_text, digest_text = encoded.split("$")
        if algorithm != "pbkdf2_sha256":
            return False
        salt = base64.b64decode(salt_text)
        expected = base64.b64decode(digest_text)
        actual = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, int(rounds))
        return hmac.compare_digest(actual, expected)
    except (ValueError, TypeError):
        return False


def _serializer() -> URLSafeTimedSerializer:
    return URLSafeTimedSerializer(get_settings().session_secret.get_secret_value(), salt="baymax-session")


def create_session_token(user_id: UUID) -> str:
    return _serializer().dumps({"user_id": str(user_id)})


def read_session_token(token: str) -> UUID | None:
    try:
        payload = _serializer().loads(token, max_age=60 * 60 * 24 * 7)
        return UUID(payload["user_id"])
    except (BadSignature, KeyError, ValueError, TypeError):
        return None
