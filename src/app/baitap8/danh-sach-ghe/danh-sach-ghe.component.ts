import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChildren,
} from '@angular/core';
import { GheComponent } from '../ghe/ghe.component';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss'],
})
export class DanhSachGheComponent implements OnInit {
  @ViewChildren('ghe') gheComponents!: GheComponent[];
  @Output() onSelect = new EventEmitter();

  danhSachGhe: any[] = [
    { soGhe: 1, tenGhe: 'Số 1', gia: 100, daDat: false },
    { soGhe: 2, tenGhe: 'Số 2', gia: 100, daDat: false },
    { soGhe: 3, tenGhe: 'Số 3', gia: 100, daDat: false },
    { soGhe: 4, tenGhe: 'Số 4', gia: 100, daDat: false },
    { soGhe: 5, tenGhe: 'Số 5', gia: 100, daDat: true },
    { soGhe: 6, tenGhe: 'Số 6', gia: 100, daDat: false },
    { soGhe: 7, tenGhe: 'Số 7', gia: 100, daDat: false },
    { soGhe: 8, tenGhe: 'Số 8', gia: 100, daDat: false },
    { soGhe: 9, tenGhe: 'Số 9', gia: 100, daDat: false },
    { soGhe: 10, tenGhe: 'Số 10', gia: 100, daDat: true },
    { soGhe: 11, tenGhe: 'Số 11', gia: 100, daDat: false },
    { soGhe: 12, tenGhe: 'Số 12', gia: 100, daDat: false },
    { soGhe: 13, tenGhe: 'Số 13', gia: 100, daDat: false },
    { soGhe: 14, tenGhe: 'Số 14', gia: 100, daDat: false },
    { soGhe: 15, tenGhe: 'Số 15', gia: 100, daDat: false },
    { soGhe: 16, tenGhe: 'Số 16', gia: 100, daDat: false },
  ];
  constructor() {}

  ngOnInit(): void {}

  chonGhe(ghe: any) {
    this.onSelect.emit(ghe);
  }

  huyGhe(soGhe: number) {
    this.gheComponents.forEach((gheComponent: GheComponent) => {
      if(gheComponent.ghe.soGhe === soGhe) {
        gheComponent.dangChon = false
      }
    })
  }
}







