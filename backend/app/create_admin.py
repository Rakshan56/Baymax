"""Create or promote one administrator from explicit environment variables.

This command is intentionally separate from API startup so deployments never
silently create a privileged account.
"""

import os

from sqlalchemy import select

from .db import Base, SessionLocal, engine
from .models import Preference, User, UserRole
from .security import hash_password


def main() -> None:
    email = os.environ.get("ADMIN_EMAIL", "").strip().lower()
    password = os.environ.get("ADMIN_PASSWORD", "")
    if not email or not password:
        raise SystemExit("ADMIN_EMAIL and ADMIN_PASSWORD must be set")
    if len(password) < 12:
        raise SystemExit("ADMIN_PASSWORD must contain at least 12 characters")

    Base.metadata.create_all(bind=engine)
    with SessionLocal() as db:
        user = db.scalar(select(User).where(User.email == email))
        if user:
            user.role = UserRole.ADMIN
            user.password_hash = hash_password(password)
        else:
            user = User(email=email, password_hash=hash_password(password), role=UserRole.ADMIN)
            user.preference = Preference()
            db.add(user)
        db.commit()
    print(f"Administrator provisioned: {email}")


if __name__ == "__main__":
    main()
