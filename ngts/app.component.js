var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        template: `
    <h1>Hello Angular with Typescript</h1>
    <div>Learning Requirements:</div>
    <ul>
        <li>Javascript/ECMAScript 5</li>
        <li>ECMAScript 2015/6, ESM (<a href="http://babeljs.io/">babeljs.io</a>)
        <li>Typescript! {{ sayhello }} (type, interface, generics)</li>
        <li>nodejs/npm (npm install, package.json, npm script)</li>
        <li>Tooling: Systemjs, Webpack, Rollup ......</li>
        <li><a href="http://angular.io/">Angular.io</a></li>
    </ul>
    `,
    })
], AppComponent);
export { AppComponent };
