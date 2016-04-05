import { Pipe, PipeTransform } from "angular2/core";

/*
 * Formats the timer into a readable time format.
 * Usage:
 *   ms | timer: format
 * Example:
 *   {{ 2000 |  timer: 'mm:ss' }}
*/
@Pipe({ name: "timer" })
export class TimerPipe implements PipeTransform {
    transform(ms: number, [format]): string {
        const sec = ((ms / 100) << 0) % 60;
        const min = ((ms / 6000) << 0) % 60;
        switch (format) {
            case "ms":
                return `${ms}`;
            case "s":
                return `${sec}`;
            case "ss":
                return `${("0" + sec).slice(-2)}`;
            case "m:s":
                return `${min}:${sec}`;
            case "m:ss":
                return `${min}:${("0" + sec).slice(-2)}`;
            case "mm:ss":
                return `${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}`;
            case "mm:ss:ms":
                return `${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}:${((ms / 100) % 1).toFixed(2).split(".")[1]}`;
            default:
                return `${ms}`;
        };
    }
}
