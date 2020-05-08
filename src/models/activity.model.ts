export class Activity {
    id: number;
    title: string;
    description: string;
    images?: string[] = [];
    dateStart: Date;
    dateEnd?: Date;
    state: string;
    idUbicación?: number;

    constructor() {
        this.id = 0;
        this.title = '';
        this.description = '';
        this.dateStart = new Date();
        this.state = 'C';
    }
}