import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';
import { ListUserService } from '../services/ListUserService';

class UserController {
  public async index(_: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createUserService = new CreateUserService();

    const user = await createUserService.execute(request.body);

    return response.json(user);
  }
}

export default UserController;
