import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = `https://movie0706.cybersoft.edu.vn/api`;

  constructor(private http: HttpClient) { }

  handleError(err: any) {
    console.log(err)
    switch (err.ststus) {
      case 500:
        console.log('lỗi server ')
        break;
      case 401:
        // handle nếu đang login thì sẽ logout
        console.log(" lỗi Unauthorized")
        break;
      default:
        break;
    }
    return throwError(err)
  }

  get<T>(path: string, option = {}): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, option).pipe(
      catchError(this.handleError)
    )
  }

  post<T>(path: string, body: any, option = {}): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, body, option).pipe(
      catchError(this.handleError)
    )
  }

  delete<T>(path: string, option = {}): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`, option).pipe(
      catchError(this.handleError)
    )
  }
  
}
