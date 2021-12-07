import { unmanaged } from "inversify";

export class Logger {
  constructor(@unmanaged() private readonly label: string) {
    this.label = label;
  }

  private log(level: string, message: string) {
    return console[level](`[${this.label}] ${message}`);
  }

  info(message: string) {
    return this.log('info', message);
  }
}