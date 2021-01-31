import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() ghe: any;
  @Output() onSelect = new EventEmitter();
  dangChon: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  chonGhe() {
    this.dangChon = !this.dangChon;
    this.onSelect.emit({ ...this.ghe, dangChon: this.dangChon });
  }
}






