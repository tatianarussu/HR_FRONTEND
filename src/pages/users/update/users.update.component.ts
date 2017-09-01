import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from "../../../services/users.service"
import { UserRoleService } from '../../../services/userrole.service';
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'users-update-component',
    templateUrl: './users.update.component.html',
    styleUrls: ['./users.update.component.css']
})
export class UsersUpdateComponent implements OnInit {
    public userUpdateForm: FormGroup;
    public UserRoleList
    public user;
    public id: number;
    public username:string;
    password:string;

    constructor(private userroleService:UserRoleService, private UserService: UserService, private route: ActivatedRoute) {
    }

    public ngOnInit() {

        this.userUpdateForm = new FormGroup({

            'username': new FormControl(null, null, null),
            'password': new FormControl(null, null, null),
        });
        this.route.params.subscribe(
            params => {

                this.id = +params['id'];
                console.log(this.id);
                this.getUserDetail(+params['id']);
            });

        this.userroleService.getAllUserRole()
            .subscribe(
                (response) => {
                    console.log(response);

                    this.UserRoleList = response;
                },
                (error) => console.log(error),
            );
    }

    public onSubmit() {
        const userInfo = this.userUpdateForm.value;
        console.log(userInfo);
        this.UserService.addUser(userInfo)
            .subscribe(
                () => console.log('success'),
                (error) => console.log(error),
            );

    }
    public getUserDetail(id) {
        this.UserService.getUserById(id)
            .subscribe((response) => {
                    console.log(response)
                    this.user = response;
                    this.username=this.user.username;
                    this.password=this.user.password;
                },
                (error2 => console.log(error2)))
    }


    public update() {
        console.log(this.userUpdateForm.value)
        this.UserService.update(this.id, this.userUpdateForm.value)
            .subscribe(
                () => console.log('success'),
                (error) => console.log(error)
            )

    }
}