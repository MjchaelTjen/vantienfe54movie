import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { LayoutComponent } from './layout/layout.component';
import { AddMovieComponent } from './add-movie/add-movie.component';


@NgModule({
  declarations: [UsersComponent, MoviesComponent, LayoutComponent, AddMovieComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
