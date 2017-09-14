import { Post } from './Post';

export interface User {
    id?: number;
    lastName: string;
    firstName: string;
    email: string;
    userName: string;
    friends: Array<any>;
    posts: Array<Post>;
    avatar: string;
}
