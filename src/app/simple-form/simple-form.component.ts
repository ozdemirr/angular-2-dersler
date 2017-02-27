import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  template: `<div>
  <input type="text"
  [(ngModel)]="message"
  [ngClass]="{tiklandiClass:tiklandimi}"
  (mousedown)="tiklandimi = true"
  (mouseup)="tiklandimi = false"
  (mouseleave)="tiklandimi = false"
  >
  </div>
  `,
  styles: [`
   .tiklandiClass {
    background-color:red;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  tiklandimi;

  message;

  constructor() {
    this.message = "testing..";
  }

  ngOnInit() {
  }

}

