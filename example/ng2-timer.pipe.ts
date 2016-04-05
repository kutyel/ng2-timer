import { Pipe, PipeTransform } from "angular2/core";

/*
 * Formats the timer into a readable time format.
 * Usage:
 *   milliseconds | timer: format
 * Example:
 *   {{ 2000 |  timer: 'mm:ss' }}
*/
@Pipe({ name: "timer" })
export class TimerPipe implements PipeTransform {
    transform(milliseconds: number, [format]): string {
        switch (format) {
            case "s":
                return `${Math.trunc(milliseconds / 100)}`;
            case "ss":
                return `${("0" + Math.trunc(milliseconds / 100)).slice(-2)}`;
            case "m:s":
                return `${Math.trunc(milliseconds / 6000)}:${("0" + Math.trunc(milliseconds / 100)).slice(-2)}`;
            case "mm:ss":
                return `${("0" + Math.trunc(milliseconds / 6000)).slice(-2)}:${("0" + Math.trunc(milliseconds / 100)).slice(-2)}`;
            default:
                return milliseconds.toString();
        };
    }
}
