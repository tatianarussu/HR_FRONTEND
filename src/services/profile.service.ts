import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'


@Injectable()
export class ProfileService {
    public baseUrl = 'http://localhost:8083';

    constructor(private http: Http) {
        console.log('creating service');
    }


    getUserProfileInfo(userId) {
        const url = `${this.baseUrl}/personal_info/userPersonInfo/${userId}`;

        return this.http.get(url)
            .map((response: Response) => {
                return response.json()
            });
    }

    getUserEducation(personalInfoId) {
        const url = `${this.baseUrl}/education_info/userEducationInfo/${personalInfoId}`;

        return this.http.get(url)
            .map((response: Response) => {
                return response.json()
            });
    }
    //
    // getUserWork(personalInfoId) {
    //     const url = `${this.baseUrl}/work_info/userWorkInfo/${personalInfoId}`;
    //
    //     return this.http.get(url)
    //         .map((response: Response) => {
    //             return response.json()
    //         });
    // }

    savePersonalInfo(aboutInfo) {
        const url = aboutInfo.id ?  `${this.baseUrl}/personal_info/${aboutInfo.id}` : `${this.baseUrl}/personal_info`;

        return aboutInfo.id ?
            this.http.put(url, aboutInfo)
                .map((response: Response) => {
                    return response.json()
                }) :
            this.http.post(url, aboutInfo)
                .map((response: Response) => {
                    return response.json()
                });
    }

    saveUserEducationInfo(education) {
        const url = education.person_id ?  `${this.baseUrl}/education_info/${education.person_id}` : `${this.baseUrl}/education_info`;

        return education.person_id ?
            this.http.put(url, education)
                .map((response: Response) => {
                    return response.json()
                }) :
            this.http.post(url, education)
                .map((response: Response) => {
                    return response.json()
                });
    }

    // saveUserWorkInfo(work) {
    //     const url = work.person_id ?  `${this.baseUrl}/work_info/${work.person_id}` : `${this.baseUrl}/work_info`;
    //
    //     return work.person_id ?
    //         this.http.put(url, work)
    //             .map((response: Response) => {
    //                 return response.json()
    //             }) :
    //         this.http.post(url, work)
    //             .map((response: Response) => {
    //                 return response.json()
    //             });
    // }

    // saveSkillInfo(toSaveSkill) {
    //     const url = toSaveSkill.id ?  `${this.baseUrl}/user_skills/${toSaveSkill.id}` : `${this.baseUrl}/user_skills`;
    //
    //     return toSaveSkill.id ?
    //         this.http.put(url, toSaveSkill)
    //             .map((response: Response) => {
    //                 return response.json()
    //             }) :
    //         this.http.post(url, toSaveSkill)
    //             .map((response: Response) => {
    //                 return response.json()
    //             });
    // }

}