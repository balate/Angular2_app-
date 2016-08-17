import {Component} from "angular2/core";
import {H1Pipe} from "../../pipes/h1pipe";

@Component({
    selector: "my-app",
    templateUrl:  'app/components/home/home.html',
    pipes: [H1Pipe]
})

export class HomePage{


    h1text: string = "Hola Mundo";

    constructor() {


    }

}