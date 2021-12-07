
import { Container } from "inversify";
import { users } from './users/users.module';

const iocContainer = new Container();
iocContainer.load(users);

export { iocContainer };
