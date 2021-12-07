import { Logger } from "@/common/logger";
import { Body, Get, Path, Post, Route } from "@tsoa/runtime";
import { unmanaged } from "inversify";
import { UserCreationDTO } from "./users.dto";
import { UsersRepository } from "./users.repository";

@Route('users')
export class UsersController {
  constructor(
    private readonly repository: UsersRepository,
    @unmanaged() private readonly logger: Logger,
  ) {
    this.logger = new Logger(this.constructor.name);
    this.repository = repository;
  }

  @Get(':id')
  async detail(@Path('id') id: string) {
    this.logger.info('DETAIL USER ACTION')
    return this.repository.getUserById(id);
  }

  @Get()
  async list() {
    this.logger.info('LIST USERS ACTION')
    return this.repository.getAllUsers();
  }

  @Post()
  async create(@Body() data: UserCreationDTO) {
    this.logger.info('CREATE USER ACTION')
    return this.repository.addUser(data);
  }
}