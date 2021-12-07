// import { UserController } from './users.controller';
// import { UsersRepository } from './users.repository';

describe('User Controller -> Unit Tests', () => {
  let repository;
  beforeAll(() => {
    repository = {
      addUser: jest.fn(),
      getAllUsers: jest.fn(),
      getUserById: jest.fn(),
      db: [],
    }
  });
  it('Should run this test', () => {
    expect(repository.addUser).not.toBeCalled();
  })
})