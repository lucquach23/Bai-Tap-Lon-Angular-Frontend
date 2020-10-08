import { Role } from "./role";
export class User {
    idAccount: number;
    userName: string;
    pass: string; 
    role: Role;
    token?: string;
}