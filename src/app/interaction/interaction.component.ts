import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  @ViewChild('movieList')
    movieListComponent!: MovieListComponent;

  // newMovie: chứa giá trị bộ phim được tạo mới
  // newMovie: any;
  constructor() {}

  ngOnInit(): void {}

  handleAddMovie(movie: any) {
    console.log(movie);
    // Cách 1: truyền input
    // this.newMovie = movie;

    // Cách 2: viewChild
    this.movieListComponent.movieList.push(movie)
  }
}
