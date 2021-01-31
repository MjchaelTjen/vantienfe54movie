import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  // template: `
  //   <div class="title">
  //     <p>Hello Demo</p>
  //   </div>
  // `,
  styleUrls: ['./demo.component.scss'],
  // styles: [
  //   `
  //     .title {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
