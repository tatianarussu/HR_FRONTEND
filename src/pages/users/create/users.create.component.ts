import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from "../../../services/users.service"
import { UserRoleService } from '../../../services/userrole.service';


@Component({
    selector: 'users-create-component',
    templateUrl: './users.create.component.html',
    styleUrls: ['./users.create.component.css']
})
export class UsersCreateComponent implements OnInit {
    public userCreateForm: FormGroup;
    public UserRoleList

    constructor(private userroleService:UserRoleService, private UserService: UserService) {
    }

    public ngOnInit() {

        this.userCreateForm = new FormGroup({

            'username': new FormControl(null, null, null),
            'password': new FormControl(null, null, null),
            'user_role_id': new FormControl(null, null),
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
        const userInfo = this.userCreateForm.value;
        console.log(userInfo);
        this.UserService.addUser(userInfo)
            .subscribe(
                 () => console.log('success'),
                (error) => console.log(error),
           );

    }
}