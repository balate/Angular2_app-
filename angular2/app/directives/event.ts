/**
 * Created by balate on 14/8/16.
 */
import {Directive} from "angular2/core";

@Directive({

    selector: "[events-dir]",
    hots: {

        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()",
        "(click)": "onClick()"


    }

})

export class EventsDir {

    onMouseEnter(){

        console.log("mouse enter");

    }
    onMouseLeave(){

        console.log("mouse leave");

    }

    onClick(){

        console.log("onClick");

    }



}