import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
// import { Baitap2Component } from './baitap2/baitap2.component';
// import { Baitap8Module } from './baitap8/baitap8.module';
// import { Baitap8Component } from './baitap8/baitap8.component';
// import { DemoComponent } from './demo/demo.component';

// import { AdminModule } from './admin/admin.module';
// import { MainModule } from './main/main.module';

const routes: Routes = [
  // { path: '', component: DemoComponent },
  // { path: 'baitap2', component: Baitap2Component },
  // { path: 'baitap8', component: Baitap8Component },
  // { path: 'baitap8', loadChildren: () => Baitap8Module },

  // pathMatch: 'full' tương tự exact bên React
  // Khi gắn module vào router không cần gắn vào mảng imports của module đó nữa
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
