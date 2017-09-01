import {Routes} from '@angular/router';

import {
    HomeComponent,
    JobsDescription,
    JobsComponent,
    ProfileComponent,
    ProfileCreate,
    UsersComponent,
    UsersCreateComponent,
    JobList,
    JobsUpdateComponent,
    PageComponent,
    LoginComponent
} from 'pages';
import {JobsCreateComponent} from "../pages/jobs/create/jobs.create.component";
import {UserlistComponent} from "../pages/users/list/userlist.component";
import {UsersUpdateComponent} from "../pages/users/update/users.update.component";


export const ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pages',
        component: PageComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },

            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'users',
                component: UsersComponent

            },
            {
                path: 'users/create',
                component: UsersCreateComponent

            },
            {
                path: 'users/list',
                component: UserlistComponent
            },
            {
                path: 'users/update/:id',
                component: UsersUpdateComponent
            },
            {
                path: 'jobs',
                component: JobsComponent
            },
            {
                path: 'job/:id',
                component: JobsDescription
            },
            {
                path: 'jobs/create',
                component: JobsCreateComponent
            },
            {
                path: 'jobs/update/:id',
                component: JobsUpdateComponent
            },
            {
                path: 'jobs/list',
                component: JobList
            }
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },


    {path: '**', redirectTo: 'login'},

];