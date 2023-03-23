import 'reflect-metadata';
import { Application } from "./application";

const application = new Application();

const port = <number><unknown>process.env.PORT ?? 3000;

application.listen({
  port,
  hostname: 'localhost'
});
