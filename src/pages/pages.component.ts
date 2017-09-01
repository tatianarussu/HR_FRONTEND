import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {UserService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})
export class PageComponent implements OnInit {
    public currentUserInfo;

    constructor(private storageService: StorageService, private userService:UserService,private router:Router) {}

    public menuItems = [{
        name: 'Home',
        url: 'home'
    },{
        name: 'Users',
        url: 'users'
    },{
        name: 'My profile',
        url: 'profile'
    }, {
        name: 'Jobs',
        url: 'jobs'
    }];

    ngOnInit() {
        this.currentUserInfo = this.storageService.getLogedInUser();
        console.log(this.currentUserInfo);
    }
    public onLogOut(){
        this.router.navigate(['/login']);
        this.storageService.removeLogedInUser();
    }
}