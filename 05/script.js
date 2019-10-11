const URL = "https://swapi.co/api";
const ENDPOINT = "starships";

class Starship {
    constructor({name, crew, manufacturer}) {
        this.name = name;
        this.crew = crew;
        this.manufacturer = manufacturer
    }
}