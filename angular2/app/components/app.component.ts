import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    templateUrl:  'app/components/app.html'
})

export class AppComponent{

    holamundo: string;
    otrotexto: string;
    otrotextomas: string;
    constructor(){

        this.holamundo = "Hola mundooooooo";
        this.otrotexto = "otro texto";
        this.otrotextomas = "ola q ases";

    }

}