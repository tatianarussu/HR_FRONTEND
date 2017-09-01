import {Injectable} from "@angular/core";

const LOGED_ID_USER_KEY = 'LOGED_IN_USER';
const SOME_OTHER_KEY = 'xxx';

@Injectable()
export class StorageService {
    setLogedInUser(userInfo) {
        localStorage.setItem(LOGED_ID_USER_KEY, JSON.stringify(userInfo));
    }

    getLogedInUser() {
        return JSON.parse(localStorage.getItem(LOGED_ID_USER_KEY));
    }

    removeLogedInUser() {
        localStorage.removeItem(LOGED_ID_USER_KEY);
    }

    clearAppStorage() {
        localStorage.removeItem(LOGED_ID_USER_KEY);
        localStorage.removeItem(SOME_OTHER_KEY);
    }
}