import { ubications } from "./ubications.model";

export class place {
    id: number;
    idubications: number;
    idtestablish: number;
    name: string;
    description: string;
    direction: string;
    email: string;
    phone: string;
    state: string;
    images?: string[] = [];
    ubications?: ubications;
    idEstablish?: string[] = [];

}