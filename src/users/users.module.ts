import { ContainerModule, decorate, injectable } from 'inversify';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';

decorate(injectable(), UsersRepository);
decorate(injectable(), UsersController);

export const users = new ContainerModule((bind) => {
  bind(UsersRepository).toSelf().inSingletonScope();
  bind(UsersController).toSelf();
})