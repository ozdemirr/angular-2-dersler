import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'simple-form',
  template: `<div>
<h1>Test</h1>
  </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}

