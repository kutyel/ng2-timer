import { Component, OnInit, Input } from "angular2/core";
import { TimerPipe } from "./ng2-timer.pipe";
import { Observable } from "rxjs/Rx";

@Component({
    selector: "ng-timer",
    template: `{{ millis | timer: 'mm:ss' }}`,
    inputs: ["interval", "startTime"],
    pipes: [TimerPipe]
})
export class TimerComponent implements OnInit {

    public millis: number = 0;

    private _timer: Observable<number>;

    @Input()
    interval: number = 10;

    @Input()
    startTime: number = 1;

    ngOnInit() {
        const timer = Observable.timer(this.startTime, this.interval);
        timer.subscribe(t => this.millis = t);
    }
}
