import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: "John Doe",
      phone: "123456789",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "987654321",
    },
  ];

  getUsers() {
    return this.users;
  }
}
