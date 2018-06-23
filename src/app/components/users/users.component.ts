import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = true;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School St',
          city: 'Lynn',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill St.',
          city: 'Miami',
          state: 'FL'
        },
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(234);
  }

  // Method was not needed . Just added to click event in HTML template.
  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}
