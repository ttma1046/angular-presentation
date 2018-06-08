import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
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
export class AppComponent { 
    /*
    sayhello: string;
    constructor(prarm: string) {
        this.sayhello = 'Hello! Yes I am here!';
    }
    */
}