import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service'
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<any>(null);
  // currentUser.next(value) => Set giá trị cho biến currentUser
  // currentUser.value => Get giá trị của biến currentUser
  // currentUser.asObservable() => Chuyển currentUser thành 1 Observable

  constructor(private api: ApiService) { }

  signin(values: any): Observable<any> {
    const url =
      'QuanLyNguoiDung/DangNhap';

    return this.api.post(url, values);
  }

  signup(values: any): Observable<any> {
    const url = 'QuanLyNguoiDung/DangKy';

    return this.api.post(url, { ...values, maNhom: 'GP01' });
  }
}
