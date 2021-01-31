import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = [];
  loading: boolean = false;
  error: string = ""

  constructor(private movieService: MovieService) {}

  // Lifecycle: tương đương với componentDidMount bên React
  // Chạy 1 lần sau khi render
  ngOnInit(): void {
    // this.movieList = this.movieService.getMovieList();

    // Promise
    // this.movieService
    //   .getMovieListPromise()
    //   .then((result) => {
    //     this.movieList = result;
    //   })
    //   .catch((error) => console.log(error));

    // Observable
    //   this.movieService.getMovieListObservable().subscribe({
    //     // next: Nhận kết quả từ Observable
    //     next: (result) => {
    //       this.movieList = result;
    //     },
    //     // error: Nhận lỗi từ Observable
    //     error: (error) => {
    //       console.log(error)
    //     },
    //     // complete: Chạy khi kết thúc observable
    //     complete: () => {
    //       console.log('Fetching completed')
    //     }
    //   });

    this.loading = true
    this.movieService.getMovieList().subscribe({
      next: (result) => {
        this.movieList = result;
      },
      error: (err) => {
        this.loading = false
        this.error = err.error;
        console.log(err);
      },
      complete: () => {
        this.loading = false
        console.log('Fetching completed');
      },
    });
  }
}




