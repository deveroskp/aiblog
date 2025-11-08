export interface CommitAuthor {
  login: string;
  avatar_url: string;
}

export interface CommitItem {
  html_url: string;
  message: string;
  date: string;
  author: CommitAuthor;
}