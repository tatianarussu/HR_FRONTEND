import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
 export class HomeComponent implements OnInit{
        public title : string ='This is the title';

        ngOnInit(){
                console.log('inside on init');
        }

}