import {Component, OnInit} from "@angular/core";
import {JobsService} from "services/jobs.service";
import {Router} from "@angular/router";
import {StorageService} from "../../../services/storage.service"

@Component({
    selector: 'job-list',
    templateUrl: './joblist.component.html',
    styleUrls: ['./joblist.component.css']
})
export class JobList implements OnInit {
    public jobList;


    constructor(private jobsService: JobsService, private router: Router, private storageService: StorageService ) {
    }

    onSelect(job) {
        this.router.navigate(['pages/job', job.id]);
    }


    ngOnInit() {
        this.getList();
    }

    public getList() {
        this.jobsService.getAllJobs()
            .subscribe(
                (response) => {
                    console.log(response);

                    this.jobList = response;
                },
                (error) => console.log(error),
            );
    }

    public delete(id) {
        this.jobsService.delete(id)
            .subscribe((done) => this.getList(), (err) => console.log(err));
    }

    public updateJob(job){
        console.log("job:"+job.id);
        this.router.navigate(['pages/jobs/update',job.id]);
    }

    public applyJob(id){
        this.jobsService.applyJob({"job_id":id, "user_id": this.storageService.getLogedInUser().id })
            .subscribe(
                () => console.log('success'),
                (error) => console.log(error),
            );
    }


}