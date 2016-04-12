# ng2-timer
Angular 2 Timer

[![Dependencies](https://img.shields.io/david/kutyel/ng2-timer.svg?style=flat-square)](https://david-dm.org/kutyel/ng2-timer)
[![Dev Dependencies](https://img.shields.io/david/dev/kutyel/ng2-timer.svg?style=flat-square)](https://david-dm.org/kutyel/ng2-timer#info=devDependencies)
[![Downloads](https://img.shields.io/npm/dm/ng2-timer.svg?style=flat-square)](https://npmjs.com/packages/ng2-timer)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/flaviocorpa)

## Installation

```
npm install --save ng2-timer
```

## Usage

```ts
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
```
