export interface ImageData {
  id: string;
  slug: string;
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: null | string;
  height: number;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    [key: string]: string;
  };
  promoted_at: string;
  sponsorship: null | any;
  tags: Tag[];
  topic_submissions: any;
  updated_at: string;
  urls: {
    [key: string]: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    [key: string]: any;
  };
  width: number;
}

export interface Tag {
  type: string;
  title: string;
  source?: {
    [key: string]: any;
  };
}

export interface ApiResponse {
  results: ImageData[];
  total: number;
  total_pages: number;
}
