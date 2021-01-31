import { MovieService } from 'src/app/core/services/movie.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  from: FormGroup = new FormGroup({
    tenPhim: new FormControl(''),
    biDanh: new FormControl(''),
    trailer: new FormControl(''),
    hinhAnh: new FormControl(''),
    moTa: new FormControl(''),
    ngayKhoiChieu: new FormControl('')
  })

  ngOnInit(): void {
  }

  handleChangeFile(evt: any) {
    const file = evt.target.files[0];
    // setValue bắt buộc thay đổi toàn bộ giá trị form
    // this.from.setValue
    // patchValue thay đổi 1 hoặc nhiều giá trị trong form
    this.from.patchValue({ 'hinhAnh': file })
  }

  handleSubmit() {
    console.log(this.from)
    this.movieService.addMovie(this.from.value).subscribe()
  }
}
