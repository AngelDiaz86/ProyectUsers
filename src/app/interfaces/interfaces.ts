export interface RespuestaUsers {
    page: number;
    results: Users[];
    seed:string;
    version:string;
}

export interface Users {
    results: any[];
    gender: string;
    name: string;
    location: string;
    email: string;
    login: string;
    registered: string;
    dob: string;
    phone: number;
    cell: number;
    id: number;
    picture: string;
    nat: string;
}