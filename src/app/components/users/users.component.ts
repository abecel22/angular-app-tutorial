import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};

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
        image: 'https://farm2.staticflickr.com/1018/1430618662_fda3a30bae.jpg',
        isActive: true
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
        image: 'https://farm6.staticflickr.com/5770/22421685249_fc8d9fab2a.jpg',
        isActive: false
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
        image: 'https://farm8.staticflickr.com/7503/15535273740_013487b73f.jpg',
        isActive: true
      }
    ];
    this.loaded = true;
    this.setCurrentClasses();

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson'
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }
}
