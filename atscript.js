/* AtScript */

/* https://docs.google.com/document/d/1fvwKPz7z7O5gC5EZjTJBKotmOtAbd3mP5Net60k9lu8/edit#heading=h.v7s5x1d7wo5j */

@Component()
class MyApp {
  server: Server;
  @Bind('name') name: string
  @Event('foo') fooFn: Function

  @Inject()
  constructor(@parent server: Server) { }

  greet(): string { }
}


/* JavaScript in ES2015 */
class MyApp() {
  constructor(server) { }

  greet(): string { }
}

MyApp.properties = {
  server: { is: Server },
  name: { is: String, annotate: [new Bind('name'] },
  fooFn: { is: Function, annotate: [new Event('foo')] },
}

MyApp.annotations = [
  new Component(), 
  new Inject(),
]

MyApp.parameters = [
  { is: Server, annotate: [parent] },
]

MyApp.prototype.greet.returns = String