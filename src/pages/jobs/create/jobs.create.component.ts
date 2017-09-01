import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from '../../../services/jobs.service';
import { SkillService } from '../../../services/skill.service';


@Component({
    selector: 'jobs-create',
    templateUrl: './jobs.create.component.html',
    styleUrls: ['./jobs.create.component.css']
})
export class JobsCreateComponent implements OnInit {

    public createJobForm: FormGroup;
    public SkillList;

    constructor(private jobsService: JobsService, private  skillService: SkillService) {}

    public ngOnInit() {
        this.createJobForm = new FormGroup({
            'name': new FormControl(null, null, null),
            'description': new FormControl(null, null, null),
            'benefits': new FormControl(null, null, null),
            'requirements': new FormArray([
                new FormControl(null, null),
            ]),
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

    public addRequirementsToList() {
        const formArray = this.createJobForm.get('requirements') as FormArray;
        formArray.push(new FormControl(null, null));
    }

    public onSubmit() {
        const jobInfo = this.createJobForm.value;
        console.log(jobInfo);
        this.jobsService.addJob(jobInfo)
            .subscribe(
                () => console.log('success'),
                (error) => console.log(error),
            );

    }



}