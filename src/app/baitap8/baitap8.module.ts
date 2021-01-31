import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap8Component } from './baitap8.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheDaDatComponent } from './danh-sach-ghe-da-dat/danh-sach-ghe-da-dat.component';
import { Baitap8RoutingModule } from './baitap8-routing.module';

@NgModule({
  declarations: [
    Baitap8Component,
    DanhSachGheComponent,
    GheComponent,
    DanhSachGheDaDatComponent,
  ],
  imports: [CommonModule, Baitap8RoutingModule],
  exports: [Baitap8Component],
})
export class Baitap8Module {}
