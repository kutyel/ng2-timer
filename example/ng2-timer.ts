import { Component, OnInit, Input } from "angular2/core";
import { TimerPipe } from "./ng2-timer.pipe";
import { Observable } from "rxjs/Rx";

@Component({
    selector: "ng-timer",
    template: `{{ millis | timer: format }}`,
    inputs: ["interval", "startTime", "format"],
    pipes: [TimerPipe]
})
export class TimerComponent implements OnInit {

    public millis: number = 0;

    @Input()
    format: string;

    @Input()
    interval: number = 10;

    @Input()
    startTime: number = 1;

    ngOnInit() {
        Observable
            .timer(this.startTime, this.interval)
            .subscribe(t => this.millis = t);
    }
}
