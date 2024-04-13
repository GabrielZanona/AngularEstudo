import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private router: Router,
    private userService: UserService  // Injete o UserService aqui
  ) {}

  goToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  onSubmit(): void {
    const existingUser = this.userService.getUser(this.username);
    
    if (existingUser && existingUser.password === this.password) {
      console.log('Login successful');
      this.successMessage = 'Login successful'; 
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Username or password is incorrect';
      this.successMessage = null; 
    }
  }
}
