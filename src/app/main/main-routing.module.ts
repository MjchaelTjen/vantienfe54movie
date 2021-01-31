import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BookingComponent } from './booking/booking.component';
import { LayoutComponent } from './layout/layout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BookingGuard } from '../core/guards/booking.guard';
import { SignupGuard } from '../core/guards/signup.guard';

const routes: Routes = [
  {
    path: 'booking/:bookingId',
    component: BookingComponent,
    canActivate: [BookingGuard],
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie/:movieId', component: MovieDetailComponent },
      { path: 'signin', component: SigninComponent },
      {
        path: 'signup',
        component: SignupComponent,
        canDeactivate: [SignupGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
