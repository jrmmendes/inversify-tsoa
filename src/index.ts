import 'reflect-metadata';
import { Application } from "./application";

const application = new Application();

application.listen({
  port: 3000,
  hostname: 'localhost'
});