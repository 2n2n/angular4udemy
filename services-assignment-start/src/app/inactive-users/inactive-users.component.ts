import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { CounterService } from "app/counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  count;
  constructor(private userService: UserService, private counter: CounterService) {}

  ngOnInit() {
    this.userService.observeInactiveUsers()
    .subscribe(users => this.users = users);

    this.counter.observeInactiveCount()
    .subscribe(count => this.count = count);
  }

  onSetToActive(id: number) {
    this.userService.activate(id);
  }
}
