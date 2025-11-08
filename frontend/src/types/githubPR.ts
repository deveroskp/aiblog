export interface PRAuthor {
  login: string;
  avatar_url: string;
}

export interface PRItem {
    id: number;
    number: number;
    title: string;
    body: string;
    state: string;
    created_at: string;
    updated_at: string;
    merged_at: string | null;
    author: PRAuthor;
    html_url: string;
}