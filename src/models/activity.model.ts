import { images } from "./images.model";

export class Activity {
    id: number;
    title: string;
    description: string;
    images: images[];
    dateStart: Date;
    dateEnd?: Date;
    state: string;
    imageUrl?: string;
    idUbicación?: number;

    constructor() {
        this.id = 0;
        this.title = '';
        this.description = '';
        this.dateStart = new Date();
        this.state = 'C';
        this.images = [];
    }
}