import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  message: string = 'Hello';
  isActive: boolean = true;
  username: string = 'Tèo';
  email: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleChangeMessage(messageRef: HTMLInputElement) {
    // const txtMessage = <HTMLInputElement>document.getElementById('txtMessage');
    // this.message = txtMessage.value;
    console.log(messageRef);
    this.message = messageRef.value;
  }

  handleChangeUsername(evt: any) {
    console.log(evt.target);
    this.username = evt.target.value;
  }
}
