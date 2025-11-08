from typing import Annotated
from backend.app.repos.services import RepoService
from fastapi import APIRouter, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from backend.app.repos.schemas import RepoResponse

repo_router = APIRouter()

security_scheme = HTTPBearer()

@repo_router.get("")
async def get_repos(
    repo_service: Annotated[RepoService, Depends()],
    token: HTTPAuthorizationCredentials = Depends(security_scheme)
):
    access_token = token.credentials
    repos = await repo_service.get_user_public_repos(access_token)
    return [RepoResponse(
        id=repo["id"],
        full_name=repo["full_name"],
        default_branch=repo["default_branch"],
        html_url=repo["html_url"],
        description=repo["description"],
        owner_login=repo["owner"]["login"],
        owner_avatar_url=repo["owner"]["avatar_url"],
        pushed_at=repo.get("pushed_at"),
        updated_at=repo.get("updated_at")
    ) for repo in repos
    ]