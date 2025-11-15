import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../../core/services/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'; 

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

onSubmit() {
  if (this.loginForm.invalid) return;

  this.loading = true;

  const { username, password } = this.loginForm.value;

  this.userService.login(username, password)
    .pipe(
      tap({
        next: () => {
          this.loading = false;
          this.router.navigate(['/products']);
        },
        error: (err: any) => {
          this.loading = false;
          this.error = err.error?.message || 'Login failed';
        }
      })
    )
    .subscribe();
}

}