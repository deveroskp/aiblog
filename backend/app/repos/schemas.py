from pydantic import BaseModel
from datetime import datetime

class RepoResponse(BaseModel):
    id: int
    full_name: str
    html_url: str
    description: str | None = None
    default_branch: str
    pushed_at: datetime | None = None
    updated_at: datetime | None = None
    owner_login: str
    owner_avatar_url: str