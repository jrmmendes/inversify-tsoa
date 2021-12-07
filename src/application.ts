import cors from 'cors';
import express, { Application as ExpressApplication, Request } from "express";
import helmet from 'helmet';
import { createLightship, Lightship } from 'lightship';
import morgan from 'morgan';
import { Swagger } from './common/swagger';
import { RegisterRoutes } from './routes';

type StartupArguments = {
  port: number,
  hostname: string,
  callback: () => void
}

export class Application {
  private readonly app: ExpressApplication;
  private readonly lightship: Lightship;

  constructor() {
    this.app = express();
    this.registerMiddlewares();
    this.lightship = createLightship({
      port: 5001,
      detectKubernetes: false,
    })
    RegisterRoutes(this.app);
  }

  private registerMiddlewares() {
    this.app.use(
      cors(),
      helmet(),
      express.json(),
      morgan('dev')
    );
    new Swagger().register({ environment: 'DEV', router: this.app });
  }

  /**
   * Start the HTTP server
   */
  listen({ port, hostname, callback }: Partial<StartupArguments>) {
    const server = this.app.listen(
      port,
      hostname
    );
    server.on('listening', () => {
      console.log(`[APPLICATION] Running at http://${hostname}:${port}`);
      console.log(`[APPLICATION] Swagger available at http://${hostname}:${port}/docs`);
      this.lightship.signalReady();
    })

    this.lightship.registerShutdownHandler(() => {
      server.close();
    })
  }
}