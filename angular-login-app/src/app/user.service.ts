import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private users$ = new BehaviorSubject<User[]>(this.users);

  constructor() {}

  addUser(user: User): void {
    this.users.push(user);
    this.users$.next(this.users);
  }

 

  getUsers(): User[] {
    return [...this.users];
  }

  getUser(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
}
