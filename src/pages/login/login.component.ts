import {Component, OnInit} from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../services/users.service";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
    public createLogin: FormGroup;

    constructor(private userService: UserService) {}

    public ngOnInit() {
        this.createLogin= new FormGroup({
            'username': new FormControl(null, null, null),
            'password': new FormControl(null, null, null),
        });
    }

    public onSubmit() {
        console.log(this.createLogin.value);
        const username = this.createLogin.value.username;
        const password = this.createLogin.value.password;

        this.userService.login(username, password)
            .subscribe(
                (successResponse) => console.log(successResponse),
                (error) => console.log(error),
            );
    }
}