import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  template: `<div>
  <ul>
  <p>Üyeler</p>
    <li *ngFor="let user of users"
    (click)="selectUser(user)">
      {{user.name}}
    </li>
  </ul>
  <div *ngIf="activeUser">
  <p>aktif üye</p>
  <h1>İsim:{{activeUser.name}}</h1>
  <h2>Yaş:{{activeUser.age}}</h2>
  </div>
  </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  activeUser;

  users = [
    {
      name:"emre",
      age:25
    },
    {
      name:"melis",
      age : 24
    }
  ];

  selectUser(user){
    this.activeUser = user;
  }

  constructor() {

  }

  ngOnInit() {
  }

}

