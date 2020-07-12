import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    classYear: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    hometown: string;
    college: string;
    major?: string;
    experiences?: string;
    lookingFor?: string;
    photos?: Photo[];
    gender: string;
}
