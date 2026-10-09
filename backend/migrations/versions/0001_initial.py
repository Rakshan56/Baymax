"""Create the initial Baymax schema."""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision = "0001_initial"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table("users", sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True), sa.Column("email", sa.String(320), nullable=False), sa.Column("password_hash", sa.String(255), nullable=False), sa.Column("role", sa.String(20), nullable=False), sa.Column("created_at", sa.DateTime(timezone=True), nullable=False), sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False))
    op.create_index("ix_users_email", "users", ["email"], unique=True)
    op.create_table("preferences", sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True), sa.Column("user_id", postgresql.UUID(as_uuid=True), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False, unique=True), sa.Column("language", sa.String(32), nullable=False), sa.Column("communication_style", sa.String(64), nullable=False), sa.Column("wellness_goals", postgresql.JSONB, nullable=False))
    op.create_table("mood_entries", sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True), sa.Column("user_id", postgresql.UUID(as_uuid=True), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False), sa.Column("mood", sa.String(32), nullable=False), sa.Column("tags", postgresql.JSONB, nullable=False), sa.Column("note", sa.Text), sa.Column("created_at", sa.DateTime(timezone=True), nullable=False), sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False))
    op.create_index("ix_mood_entries_user_created", "mood_entries", ["user_id", "created_at"])
    op.create_table("conversations", sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True), sa.Column("user_id", postgresql.UUID(as_uuid=True), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False), sa.Column("title", sa.String(160)), sa.Column("created_at", sa.DateTime(timezone=True), nullable=False), sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False))
    op.create_index("ix_conversations_user_updated", "conversations", ["user_id", "updated_at"])
    op.create_table("messages", sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True), sa.Column("conversation_id", postgresql.UUID(as_uuid=True), sa.ForeignKey("conversations.id", ondelete="CASCADE"), nullable=False), sa.Column("role", sa.String(20), nullable=False), sa.Column("content", sa.Text, nullable=False), sa.Column("created_at", sa.DateTime(timezone=True), nullable=False))
    op.create_index("ix_messages_conversation_created", "messages", ["conversation_id", "created_at"])
    op.create_table("audit_events", sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True), sa.Column("actor_user_id", postgresql.UUID(as_uuid=True), sa.ForeignKey("users.id", ondelete="SET NULL")), sa.Column("action", sa.String(120), nullable=False), sa.Column("target_type", sa.String(80), nullable=False), sa.Column("target_id", sa.String(120)), sa.Column("metadata", postgresql.JSONB, nullable=False), sa.Column("created_at", sa.DateTime(timezone=True), nullable=False))
    op.create_index("ix_audit_events_created", "audit_events", ["created_at"])


def downgrade() -> None:
    op.drop_table("audit_events")
    op.drop_table("messages")
    op.drop_table("conversations")
    op.drop_table("mood_entries")
    op.drop_table("preferences")
    op.drop_index("ix_users_email", table_name="users")
    op.drop_table("users")
