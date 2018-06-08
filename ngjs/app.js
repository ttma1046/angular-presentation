/* ES 2015 Class */


class AppComponent {
//   chandlersname = "Chandler";
  constructor() {
    this.chandlersname = "Chandler";
  }
}

AppComponent.annotations = [
  new ng.core.Component({
    selector: 'app-root',
    template: `<h1>Hello {{chandlersname}}, this is Angular with one Javascript file</h1>
    <div>Learning Requirements: </div>
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
];

class AppModule { }

AppModule.annotations = [
  new ng.core.NgModule({
    imports: [
      ng.platformBrowser.BrowserModule,
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [
      AppComponent,
    ],
  })
]

ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule)
