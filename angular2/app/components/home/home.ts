import {Component} from "angular2/core";
import {Underline} from "../../directives/underline"

@Component({
    selector: "my-app",
    templateUrl:  'app/components/home/home.html',
    directives: [Underline]
})

export class HomePage{

    holamundo: string;
    otrotexto: string;
    otrotextomas: string;
    constructor(){

        this.holamundo = "Hola mundooooooo";
        this.otrotexto = "otro texto";
        this.otrotextomas = "ola q ases";

    }

}