import {v4 as uuid} from "uuid";

export class Meniu {
    constructor(imageUrl, title, descriere, pret) {
      this.id = uuid();
      this.imageUrl = imageUrl;
      this.title = title;
      this.descriere = descriere;
      this.pret = pret;
    }
  }
  