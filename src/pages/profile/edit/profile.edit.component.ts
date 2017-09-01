import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl , FormArray} from "@angular/forms"
import { SkillService } from '../../../services/skill.service';
import {StorageService} from "../../../services/storage.service";
import {ProfileService} from "../../../services/profile.service";

@Component({
    selector: 'profile-edit',
    templateUrl: './profile.edit.component.html',
    styleUrls: ['./profile.edit.component.css']
})
export class ProfileEdit implements OnInit{

    public steps = ['About', 'Education', 'Work', 'Skills'];
    public currentPageIndex = 0;
    public SkillList;

    public profileEditForm: FormGroup;

    constructor(
        private  skillService: SkillService,
        private profileService: ProfileService,
        private storageService: StorageService,
    ) {}


    public changeCurrentPage(pageIndex: number) {
        this.currentPageIndex = pageIndex
    }

    public ngOnInit() {
        const currentUserInfo = this.storageService.getLogedInUser();
        const currentUserId = currentUserInfo.id;

        this.profileService.getUserProfileInfo(currentUserId)
            .subscribe(
                (response) =>{
                    const data = response.data;

                    this.profileEditForm = new FormGroup({
                        'personId': new FormControl(data ? data.id : null, null, null),
                        'about': new FormGroup({
                            'first_name': new FormControl(data ? data.first_name : null),
                            'last_name': new FormControl(data ? data.last_name : null),
                            'description': new FormControl(data ? data.description : null)
                        }),

                        'education': new FormGroup({
                            'person_id': new FormControl(data ? data.person_id : null, null, null),
                            'school_name': new FormControl(data ? data.school_name : null),
                            'graduated_year': new FormControl(data ? data.graduated_year : null),
                            'description': new FormControl(data ? data.description : null)
                        }),

                        'work': new FormGroup({
                            'person_id': new FormControl(data ? data.person_id : null, null, null),
                            'company_name': new FormControl(data ? data.company_name : null),
                            'position': new FormControl(data ? data.position : null),
                            'start_data': new FormControl(data ? data.start_data : null),
                            'end_data': new FormControl(data ? data.end_data : null)
                        }),

                        "skills": new FormArray([
                            new FormControl(null, null, null),
                        ]),

                    });

                    console.log(this.profileEditForm);
                },
                (error) => console.log(error),
            );

        // this.profileService.getUserWork(personalInfoId)
        //     .subscribe(
        //         (response) =>{
        //             const data = response.data;
        //
        //             this.profileEditForm = new FormGroup({
        //                 'work': new FormGroup({
        //                     'person_id': new FormControl(data ? data.person_id : null, null, null),
        //                     'company_name': new FormControl(data ? data.company_name : null),
        //                     'position': new FormControl(data ? data.position : null),
        //                     'start_data': new FormControl(data ? data.start_data : null),
        //                     'end_data': new FormControl(data ? data.end_data : null)
        //                 }),
        //             });
        //         },
        //         (error) => console.log(error),
        //     );

        // this.profileService.getUserSkills(personalInfoId)
        //     .subscribe(
        //         (response) =>{
        //             const data = response.data;
        //
        //             this.profileEditForm = new FormGroup({
        //
        //                 'skills': new FormGroup({
        //                     'skill_id': new FormControl(data ? data.skill_id : null),
        //                     'position': new FormControl(data ? data.position : null)
        //                 })
        //             });
        //         },
        //         (error) => console.log(error),
        //     );


        this.skillService.getAllSkills()
            .subscribe(
                (response) => {
                    console.log(response);

                    this.SkillList = response;
                },
                (error) => console.log(error),
            );
    }

    public addSkillsToList() {
        const formArray = this.profileEditForm.get('skills') as FormArray;
        formArray.push(new FormControl(null, null));
    }

    public onSubmit() {
        const currentUserInfo = this.storageService.getLogedInUser();
        const currentUserId = currentUserInfo.id;

        const toSaveData = this.profileEditForm.value;
        let personId = toSaveData.personId;

        const about = toSaveData.about;
        const skills = toSaveData.skills;

        about.id = personId;
        about.users_id = currentUserId;
        this.profileService.savePersonalInfo(about)
            .subscribe(
                (response) => {
                    const person_id = response.data.id;

                    skills.forEach((skill) => {
                        const toSaveSkill = {
                            skill_id: skill,
                            person_id: person_id
                        };

                        console.log(toSaveSkill);

                        //this.profileService.saveSkillInfo(toSaveSkill);
                    });

                //     if(this.currentPageIndex === 4) {
                //     const toSaveData = this.profileEditForm.value;
                //     let personalInfoId = toSaveData.personId;
                //
                //     this.profileService.getUserEducation(personalInfoId)
                //         .subscribe(
                //             (response) =>{
                //                 const data = response.data;
                //
                //                 this.profileEditForm = new FormGroup({
                //                     'education': new FormGroup({
                //                         'person_id': new FormControl(data ? data.person_id : null, null, null),
                //                         'school_name': new FormControl(data ? data.school_name : null),
                //                         'graduated_year': new FormControl(data ? data.graduated_year : null),
                //                         'description': new FormControl(data ? data.description : null)
                //                     }),
                //                 });
                //                 console.log(this.profileEditForm);
                //             },
                //             (error) => console.log(error),
                //         );
                //
                //
                //     this.profileService.saveUserEducationInfo(education);
                // }


                    //this.profileService.saveUserWorkInfo(work);
                },
                (error) => console.log(error),
            );

        console.log(this.profileEditForm);
    }
}



