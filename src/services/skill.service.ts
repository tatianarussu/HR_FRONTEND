import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'


@Injectable()
export class SkillService {
    public baseUrl = 'http://localhost:8083';

    constructor(private http: Http) {
        console.log('creating service');
    }

    public getAllSkills() {
        const url = `${this.baseUrl}/skills`;

        return this.http.get(url)
            .map((response: Response) => {
                return response.json()
            });
    }
}