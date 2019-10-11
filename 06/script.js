const URL = "https://swapi.co/api";
const ENDPOINT = "starships";

class Starship {
    constructor({name, crew, manufacturer}) {
        this.name = name;
        this.crew = crew;
        this.manufacturer = manufacturer
    }
}

async function getPage(url, endpoint, page) {
    let res = await fetch(`${url}/${endpoint}/?page=${page}`);
    let data = await res.json();
    return data;
}

async function getAllRecords(url, endpoint) {
    let pageNumber = 1;
    let results;
    let page = await getPage(url, endpoint, pageNumber);
    results = page.results.map(r => new Starship(r));
    while (page.next) {
        pageNumber++;
        page = await getPage(url, endpoint, pageNumber);
        results = results.concat(page.results.map(r => new Starship(r)));
    }
    return results;
}



