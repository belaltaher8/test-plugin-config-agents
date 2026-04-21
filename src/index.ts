export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserRole = "admin" | "viewer" | "editor";

export const DEFAULT_ROLE: UserRole = "viewer";

export function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  listUsers(): User[] {
    return this.users;
  }
}
