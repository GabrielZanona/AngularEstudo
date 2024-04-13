import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  newUsername: string = '';
  newPassword: string = '';

  constructor(private router: Router, private userService: UserService) {}

  onSubmit(): void {
    const newUser = { username: this.newUsername, password: this.newPassword };
    this.userService.addUser(newUser);
    this.router.navigate(['/login']);
  }

}
