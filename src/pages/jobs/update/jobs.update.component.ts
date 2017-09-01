import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,FormArray} from '@angular/forms';
import {JobsService} from "../../../services/jobs.service"
import {SkillService} from "../../../services/skill.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'jobs-update',
    templateUrl: './jobs.update.component.html',
    styleUrls: ['./jobs.update.component.css']
})
export class JobsUpdateComponent implements OnInit {

    public updateForm: FormGroup;
    public SkillList;
    public job;
    public id: number;
    public name:string;
    description:string;
    benefits:string;

    constructor(private skillService: SkillService, private jobService: JobsService, private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.updateForm = new FormGroup({
            'name': new FormControl(null, null, null),
            'description': new FormControl(null, null, null),
            'benefits': new FormControl(null, null, null),
            'requirements': new FormArray([
                new FormControl(null, null),
            ]),
        });
        this.route.params.subscribe(
            params => {

                this.id = +params['id'];
                console.log(this.id);
                this.getJobDetail(+params['id']);
            });

        this.skillService.getAllSkills()
            .subscribe(
                (response) => {
                    console.log(response);

                    this.SkillList = response;
                },
                (error) => console.log(error),
            );

    }

    public getJobDetail(id) {
        this.jobService.getJobById(id)
            .subscribe((response) => {
                    console.log(response)
                    this.job = response;
                    this.name=this.job.name;
                    this.description=this.job.description;
                    this.benefits=this.job.benefits;
                },
                (error2 => console.log(error2)))
    }


    public update() {
        console.log(this.updateForm.value)
        this.jobService.update(this.id, this.updateForm.value)
            .subscribe(
                () => console.log('success'),
                (error) => console.log(error)
            )

    }

}