import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    // Đăng nhập: taiKhoan, matKhau
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      matKhau: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  handleSignin() {
    this.signinForm.markAllAsTouched();
    if (this.signinForm.invalid) return;
    console.log(this.signinForm.value);

    this.auth.signin(this.signinForm.value).subscribe({
      next: (result) => {
        // set value cho currentUser trong AuthService
        this.auth.currentUser.next(result);

        // Lưu xuống localStorage
        localStorage.setItem('user', JSON.stringify(result));

        const { maLoaiNguoiDung } = result;

        if ((window as any).PATH) {
          this.router.navigateByUrl((window as any).PATH);
          (window as any).PATH = null;
        } else if (maLoaiNguoiDung === 'QuanTri') {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/');
        }
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }
}
