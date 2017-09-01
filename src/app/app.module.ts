import { NgModule,Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES } from './app.routes';
import { RouterModule } from "@angular/router";
import { Ng2WizardModule } from 'ng2-wizard';
import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdOptionModule,
    MdListModule,
    MdOptionModule,
    MdSelectModule,
    MdDatepickerModule,
    MdToolbarModule,
    MdButtonToggleModule,
    MdNativeDateModule, MdSnackBarModule, MdMenuTrigger, MdMenuModule
} from '@angular/material';
// -------------------

import {
    HomeComponent,
    JobsComponent,
    JobsDescription,
    ProfileComponent,
    UsersComponent,
    UsersCreateComponent ,
    JobsCreateComponent,
    ProfileEdit,
    LoginComponent,
    PageComponent
} from 'pages';
import { JobsService, UserRoleService, StorageService } from 'services';
import {HttpModule} from "@angular/http";
import {JobList} from "../pages/jobs/list/joblist.component";
import {SkillService} from "../services/skill.service";
import {UserlistComponent} from "../pages/users/list/userlist.component";
import {UserRoleService} from "../services/userrole.service";
import {UserService} from "../services/users.service";
import {UsersUpdateComponent} from "../pages/users/update/users.update.component";
import {AppComponent} from "./app.component";
import {JobsUpdateComponent} from "../pages/jobs/update/jobs.update.component";
import {ProfileService} from "../services/profile.service";


@NgModule({
    declarations: [
        AppComponent,
        PageComponent,
        JobsComponent,
        JobsDescription,
        JobsCreateComponent,
        HomeComponent,
        ProfileComponent,
        ProfileEdit,
        UsersComponent,
        UsersCreateComponent,
        LoginComponent,
        JobList,
        JobsUpdateComponent,
        UserlistComponent,
        UsersUpdateComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        MdButtonToggleModule,
        MdButtonModule,
        MdIconModule,
        MdCheckboxModule,
        MdCardModule,
        MdToolbarModule,
        MdInputModule,
        MdButtonModule,
        Ng2WizardModule,
        MdListModule,
        ReactiveFormsModule,
        MdSelectModule,
        MdOptionModule,
        MdNativeDateModule,
        MdDatepickerModule,
        MdSnackBarModule,
        MdMenuModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: [
        JobsService,
        SkillService,
        UserService,
        UserRoleService,
        StorageService,
        ProfileService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}