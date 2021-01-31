import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheDaDatComponent } from './danh-sach-ghe-da-dat/danh-sach-ghe-da-dat.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-baitap8',
  templateUrl: './baitap8.component.html',
  styleUrls: ['./baitap8.component.scss'],
})
export class Baitap8Component implements OnInit {
  @ViewChild('dsGheDaDat') dsGheDaDatComponent!: DanhSachGheDaDatComponent;
  @ViewChild('dsGhe') dsGheComponent!: DanhSachGheComponent
  constructor() {}

  ngOnInit(): void {}

  chonGhe(ghe: any) {
    this.dsGheDaDatComponent.chonGhe(ghe);
  }

  huyGhe(soGhe: number) {
    this.dsGheComponent.huyGhe(soGhe)
  }
}







