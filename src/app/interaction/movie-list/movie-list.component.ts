import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnChanges {
  // @Input() newMovie: any;

  movieList: any[] = [
    {
      id: 1,
      name: 'Avengers',
      price: 80000,
      image: 'assets/img/avengers.jpeg',
    },
    {
      id: 2,
      name: 'Wonder Woman',
      price: 80000,
      image: 'assets/img/wonder-woman.jpeg',
    },
    {
      id: 3,
      name: 'One punch man',
      price: 80000,
      image: 'assets/img/one-punch-man.jpeg',
    },
    {
      id: 4,
      name: 'Fast and Furious',
      price: 80000,
      image: 'assets/img/fast-and-furious.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // lifecycle ngOnChanges sẽ chạy sau khi Input thay đổi
  // Cách 1: dùng truyền input
  ngOnChanges(changes: any) {
    //   const { newMovie } = changes;
    //   const movie = newMovie.currentValue;
    //   if (movie && newMovie?.currentValue?.id !== newMovie?.previousValue?.id) {
    //     this.movieList.push(movie);
    //   }
  }

  handleDeleteMovie(movieId: number) {
    this.movieList = this.movieList.filter((movie) => {
      return movie.id !== movieId;
    });
  }
}
