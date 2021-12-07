import { v4 as uuid } from 'uuid';
import { User } from './users.dto';

export class UsersRepository {
  private readonly db: User[]

  constructor() {
    this.db = [];
  }

  addUser({ name, age }: { name: string, age: number }) {
    const newUser: User = {
      id: uuid(),
      name,
      age,
    };

    this.db.push(newUser);
    return newUser;
  }

  getUserById(id: string) {
    return this.db.find(({ id }) => id === id);
  }

  getAllUsers() {
    return this.db;
  }
}