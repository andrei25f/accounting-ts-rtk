export enum UpdateMode {
    DEFAULT, EDITPROFILE, CHANGEPASSWORD
}

export interface UserProfile {
    firstName: string,
    lastName: string,
    login: string,
    roles: string[]
}

export interface UserRegister {
    firstName: string,
    lastName: string,
    login: string,
    password: string
}

export interface UserData {
    firstName: string,
    lastName: string
}