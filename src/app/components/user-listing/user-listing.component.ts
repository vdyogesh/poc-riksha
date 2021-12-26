import { Component, OnInit } from '@angular/core';

import UsersJson from '../../users.json';

export interface USERS {
  id: String;
  index: Number;
  picture: String;
  age: Number;
  name: String;
  gender: String;
  email: String;
  phone: String;
  address: String;
  registered: String;
}
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'gender', 'age', 'phone', 'email', 'address'];
  Users: USERS[] = UsersJson;
  dataSource = this.Users;

  constructor(){
    console.log(this.Users);
  }

  ngOnInit(): void {
  }

}