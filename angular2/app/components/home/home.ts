import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    templateUrl:  'app/components/home/home.html',
})

export class HomePage{


    h1text: string = "Hola Mundo";

    constructor() {


    }

}