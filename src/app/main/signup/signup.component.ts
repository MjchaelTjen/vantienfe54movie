import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  handleSignup() {
    if (this.signupForm.invalid) return;

    console.log(this.signupForm.value);
    this.auth.signup(this.signupForm.value).subscribe({
      error: (err) => {
        console.log(err.error);
      },
      complete: () => {
        // Redirect sang trang signin
        this.router.navigateByUrl('/signin')
      },
    });
  }
}
