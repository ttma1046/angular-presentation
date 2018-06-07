import { Component } from '@angular/core'

export class AppComponent { }

AppComponent.annotations = [
  new Component({
    selector: 'app-root',
    template: `
    <h1>Hello Angular with ESM and Bundling</h1>
    <div>Learning Requirements:</div>
    <ul>
        <li>Javascript/ECMAScript 5</li>
        <li>ECMAScript 2015/6, ESM (<a href="http://babeljs.io/">babeljs.io</a>)
        <li>Typescript</li>
        <li>nodejs/npm (npm install, package.json, npm script)</li>
        <li>Tooling: Systemjs, Webpack, Rollup ......</li>
        <li><a href="http://angular.io/">Angular.io</a></li>
    </ul>
    `
  })
]