export interface IUser {
  id: string;
  name: string;
  mobileNo: string;
  email: string;
  followers: string[];
  following: string[];
}

export interface IDiscussion {
  id: string;
  text: string;
  image?: string;
  hashtags: string[];
  createdOn: Date;
  author: string;
  likes: string[];
  comments: string[];
  viewCount: number;
}

export interface IComment {
  id: string;
  text: string;
  author: string;
  discussion: string;
  likes: string[];
  replies: string[];
}
