import {Component, OnInit} from "@angular/core";
import {UserService} from "services/users.service";
import {Router} from "@angular/router";

@Component({
    selector: 'user-list',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    public userList;

    constructor(private usersService: UserService,private router: Router) {
        console.log('creating job component');
    }
    onSelect(user) {
        this.router.navigate(['pages/users', user.id]);
    }


    ngOnInit() {
        this.getUserList();
    }

    public getUserList() {
        this.usersService.getAllUsers()
            .subscribe(
                (response) => {
                    console.log(response);

                    this.userList = response;
                },
                (error) => console.log(error),
            );
    }

    public delete(id) {
        this.usersService.delete(id)
            .subscribe((done) => this.getUserList(), (err) => console.log(err));
    }
    public updateUser(user){
        console.log("user:"+user.id);
        this.router.navigate(['pages/users/update',user.id]);
    }

}