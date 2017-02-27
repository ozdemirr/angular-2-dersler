import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  template: `<div>
  <input [(ngModel)]="message">
  <h1>Mesajınız : {{message}}</h1>
  </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  message = "merhaba";

  constructor() {
    setInterval(() => this.message = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

}

