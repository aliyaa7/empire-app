import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './main.html',
    styleUrls: ['./main.scss']

})
export class AppComponent {
    title: string ;
    constructor() {



        // pour faire reference a ladresse du title 
        this.title = 'Salam ';
        let that = this;
        setTimeout(function () {
            that.title = 'wa3leyka salam';
        }, 5000)
    }
}


