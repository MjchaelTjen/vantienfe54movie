import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleAddMovie(name: string, price: string, images: FileList | null) {
    console.log(name, price, images);

    // Chuyển File về base64 để có thể hiển thị ra UI
    const file = images?.[0] as Blob;
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = (evt) => {
      console.log(evt);

      const movie = {
        id: Math.floor(Math.random() * 100),
        name,
        price: parseInt(price),
        image: evt?.target?.result
      };

      this.onAdd.emit(movie);
    };
  }
}
