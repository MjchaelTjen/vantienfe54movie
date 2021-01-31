import { AddMovieComponent } from './add-movie/add-movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // { path: 'movies', component: MoviesComponent },
  // { path: 'users', component: UsersComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'users' },
      { path: 'movies', component: MoviesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'movies/add', component: AddMovieComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
