import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-root', // Tên component sẽ nhúng vào html
  // Khai báo file html của component
  templateUrl: './app.component.html',
  // Khai báo file css/scss của component
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    const user = localStorage.getItem('user');

    if (user) {
      this.auth.currentUser.next(JSON.parse(user));
    }
  }
}
