import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  template: `<div>
  Mesajlar;
  <ul>
  <li *ngFor="let message of messages">{{message}}</li>
  </ul>
  </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  messages = ["angular 2", "öğreniyorum"];

  constructor() {

  }

  ngOnInit() {
  }

}

