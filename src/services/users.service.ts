import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";
import {StorageService} from "./storage.service";

@Injectable()
export class UserService {
    public baseUrl = 'http://localhost:8083';

    constructor(
        private http: Http,
        private router: Router,
        public snackBar: MdSnackBar,
        private storageService: StorageService
    ) {
        console.log('creating service');
    }

    public login(username: string, password: string) {
        const url = `${this.baseUrl}/users/login`;
        const params = {
            username,
            password
        };

        return this.http.post(url, params)
            .map((response: Response) => {
                const jsonResponse = response.json();

                if (jsonResponse.data) {
                    this.storageService.setLogedInUser(jsonResponse.data);
                    this.router.navigate(['/pages/home']);
                }
                else {
                    this.snackBar.open('Username or Password wrong!', null,{
                        duration: 2000,
                    });

                }
                return jsonResponse;
            });
    }

    public getAllUsers() {
        const url = `${this.baseUrl}/users`;

        return this.http.get(url)
            .map((response: Response) => {
                return response.json()
            });
    }
    public getUserById(id: number) {
        const url = `${this.baseUrl}/users/${id}`;

        return this.http.get(url)
            .map((response: Response) => {return response.json()});
    }

    public addUser(user: object) {
        const url = `${this.baseUrl}/users`;

        return this.http.post(url, user)
            .map((response: Response) => {
                return response.json()
            });
    }
    public delete(id: number) {
        const url = `${this.baseUrl}/users/${id}`;

        return this.http.delete(url)
            .map((response: Response) => {return response.json()});
    }
    public update(id: number, body) {
        const url = `${this.baseUrl}/users/${id}`;

        return this.http.put(url, body)
            .map((response: Response) => {return response.json()});
    }
}
