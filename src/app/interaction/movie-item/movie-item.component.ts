import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  // Khai báo nhận dữ liệu từ component cha truyền xuống
  @Input() movie: any
  // EventEmitter: định nghĩa ra 1 custom event
  // Output: Đẩy event lên component cha
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteMovie() {
    // Cần truyền id của movie lên component cha là movie-list
    // emit: kích hoạt sự kiện và truyền kèm theo value
    this.onDelete.emit(this.movie.id)
  }
}








