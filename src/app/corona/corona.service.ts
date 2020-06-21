import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root",
})

export class CoronaService {
    baseUrl = `https://coronavirus-19-api.herokuapp.com`;


    constructor(private http: HttpClient) {}

    getCoronas(idxstart = 0) {
        if (idxstart) {
            return this.http.get(`${this.baseUrl}/countries?offset=${idxstart}`);
        }
        return this.http.get(`${this.baseUrl}/countries`);
    }

    getCorona(country: string) {
        return this.http.get(`${this.baseUrl}/countries/${country}`);
    }

}

