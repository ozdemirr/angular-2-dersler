import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  template: `<div>
<h1>Test css</h1>
  </div>
  `,
  styles: [`
    h1 {
      color:red;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}

