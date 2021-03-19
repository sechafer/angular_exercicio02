import { Component, OnInit } from '@angular/core';
import { DataUsersService } from '../data-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any

  constructor(usServ: DataUsersService) {
    usServ.getAll().subscribe(users => {
      this.users = users;
      console.log(users)
    })
  }

  ngOnInit(): void {
  }

}