import { Component } from "angular2/core";
import { TimerComponent } from "./ng2-timer";

@Component({
    selector: "my-app",
    template: `
        <h1>Angular 2 Timer Example</h1>
        <ng-timer [format]="'mm:ss:SSS'"></ng-timer>
    `,
    directives: [TimerComponent]
})
export class AppComponent { }
