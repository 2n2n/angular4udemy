import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { CounterService } from "app/counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private userService: UserService, private counter: CounterService) {}
  users: string[];
  count;

  ngOnInit() {
    this.counter.observeActiveCount()
    .subscribe(count => this.count = count);
    // listen to changes on active users.
    this.userService.observeActiveUsers()
    .subscribe(users => this.users = users);
  }
  onSetToInactive(id: number) {
    this.userService.deactivate(id);
  }
}
