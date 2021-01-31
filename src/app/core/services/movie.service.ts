import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../models/movie';
import { ApiService } from './api.service'

import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  // Không cần import vào trong mảng providers ở AppModule khi có providedIn: 'root'
  providedIn: 'root',
})
export class MovieService {
  constructor(private api: ApiService) { }

  getMovieList(): Observable<Movie[]> {
    const url = `QuanLyPhim/LayDanhSachPhim`;

    let params = new HttpParams();
    params = params.append('maNhom', 'GP01');
    // params = page ? params.append('maNhom', 'GP01') : params

    return this.api.get<Movie[]>(url, { params });
  }

  getMovieDetail(movieId: string): Observable<MovieDetail> {
    const url = `QuanLyPhim/LayThongTinPhim`;

    let params = new HttpParams();
    params = params.append('maPhim', movieId);

    return this.api.get<MovieDetail>(url, { params });
  }

  addMovie(movie: any): Observable<any> {
    const url = `QuanLyPhim/ThemPhimUploadHinh`;
    const formData = new FormData();
    for (let item in movie) {
      formData.append(item, movie[item]);
    }
    formData.append('maNhom', 'GP01')
    return this.api.post(url, formData)
  }

  // getMovieListPromise(): Promise<Movie[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // reject('Error fetching')
  //       resolve([
  //         {
  //           id: 1,
  //           name: 'Avengers',
  //           price: 80000,
  //           image: 'assets/img/avengers.jpeg',
  //         },
  //         {
  //           id: 2,
  //           name: 'Wonder Woman',
  //           price: 80000,
  //           image: 'assets/img/wonder-woman.jpeg',
  //         },
  //         {
  //           id: 3,
  //           name: 'One punch man',
  //           price: 80000,
  //           image: 'assets/img/one-punch-man.jpeg',
  //         },
  //         {
  //           id: 4,
  //           name: 'Fast and Furious',
  //           price: 80000,
  //           image: 'assets/img/fast-and-furious.jpeg',
  //         },
  //       ]);
  //     }, 2000);
  //   });
  // }

  // getMovieListObservable(): Observable<Movie[]> {
  //   return new Observable((subscribe) => {
  //     setTimeout(() => {
  //       // subscribe.error('Fetching error')

  //       subscribe.next([
  //         {
  //           id: 1,
  //           name: 'Avengers',
  //           price: 80000,
  //           image: 'assets/img/avengers.jpeg',
  //         },
  //         {
  //           id: 2,
  //           name: 'Wonder Woman',
  //           price: 80000,
  //           image: 'assets/img/wonder-woman.jpeg',
  //         },
  //         {
  //           id: 3,
  //           name: 'One punch man',
  //           price: 80000,
  //           image: 'assets/img/one-punch-man.jpeg',
  //         },
  //         {
  //           id: 4,
  //           name: 'Fast and Furious',
  //           price: 80000,
  //           image: 'assets/img/fast-and-furious.jpeg',
  //         },
  //       ]);

  //       subscribe.complete();
  //     }, 2000);
  //   });
  // }
}
