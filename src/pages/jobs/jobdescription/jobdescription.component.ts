import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JobsService} from "services/jobs.service";

@Component({
    selector: 'product-details',
    templateUrl: './jobdescription.component.html',
    styleUrls: ['./jobdescription.component.css']
})
export class JobsDescription implements OnInit {

    public job;
    public id: number;

    constructor(private jobService:JobsService, private router: ActivatedRoute){

    }

    ngOnInit() {
        this.id = + this.router.params.value.id;

        this.jobService.getJobById(this.id)
            .subscribe(
                (response) =>{
                    console.log(response);

                    this.job = response;
                },
                (error) => console.log(error),
            );
    }

}
