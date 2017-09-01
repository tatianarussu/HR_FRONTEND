import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class JobsService {
    public baseUrl = 'http://localhost:8083';

    constructor(private http: Http) {
        console.log('creating service');
    }

    public getAllJobs() {
        const url = `${this.baseUrl}/jobs`;

        return this.http.get(url)
            .map((response: Response) => {return response.json()});
    }
    public getJobById(id: number) {
        const url = `${this.baseUrl}/jobs/${id}`;
        return this.http.get(url)
            .map((response: Response) => {return response.json()});
    }

    public addJob(job: object) {
        const url = `${this.baseUrl}/jobs`;

        return this.http.post(url, job)
            .map((response: Response) => {return response.json()});
    }

    public delete(id: number) {
        const url = `${this.baseUrl}/jobs/${id}`;

        return this.http.delete(url)
            .map((response: Response) => {return response.json()});
    }

    public update(id: number, body) {
        const url = `${this.baseUrl}/jobs/${id}`;

        return this.http.put(url, body)
            .map((response: Response) => {return response.json()});
    }

    public applyJob(apply) {
        const url = `${this.baseUrl}/job_apply`;
        console.log('url', url);
        console.log('apply', apply);
        return this.http.post(url, apply)
            .map((response: Response) => {
                return response.json()
            });

    }
}
