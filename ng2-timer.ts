import { Component, OnInit, Input } from "angular2/core";
import { DateFormatPipe } from "angular2-moment";
import { Observable } from "rxjs/Rx";

@Component({
    selector: "ng-timer",
    pipes: [DateFormatPipe],
    template: `{{ timer | async | amDateFormat: format }}`,
    inputs: ["startTime", "format"]
})
export class TimerComponent implements OnInit {

    private timer: Observable<number>;

    @Input()
    format: string;

    @Input()
    startTime: number = 1000;

    ngOnInit() {
        this.timer = Observable.timer(this.startTime, 1);
    }
}
