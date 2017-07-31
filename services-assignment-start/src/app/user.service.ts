import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { CounterService } from "app/counter.service";

@Injectable()
export class UserService implements OnInit {

  constructor(private count: CounterService) { 
     this.count.recount(this.activeUsers.getValue(), this.inactiveUsers.getValue());
  }
    
  ngOnInit() {
    
  }
  activeUsers = new BehaviorSubject(['Max', 'Anna']);
  inactiveUsers = new BehaviorSubject(['Chris', 'Manu']);
  

  observeActiveUsers() {
    return this.activeUsers.asObservable();
  }

  observeInactiveUsers() {
    return this.inactiveUsers.asObservable();
  }

  activate(id: number) {
    const activeUsers = this.activeUsers.getValue();
    const inactiveUsers = this.inactiveUsers.getValue();

    const user = inactiveUsers.splice(id, 1);
    activeUsers.push(user[0]);

    // emit the changes of the activeUsers
    this.activeUsers.next(activeUsers);
    this.inactiveUsers.next(inactiveUsers);
    this.count.recount(activeUsers, inactiveUsers);
  }
  
  deactivate(id: number) {
    const activeUsers = this.activeUsers.getValue();
    const inactiveUsers = this.inactiveUsers.getValue();

    const user = activeUsers.splice(id, 1);
    inactiveUsers.push(user[0]);

    // emit the changes of the activeUsers
    this.activeUsers.next(activeUsers);
    this.inactiveUsers.next(inactiveUsers);
    this.count.recount(activeUsers, inactiveUsers);
  }


}
