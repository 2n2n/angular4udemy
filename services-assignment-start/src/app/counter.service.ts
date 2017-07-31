import { Injectable, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { BehaviorSubject } from 'rxjs/Rx';
@Injectable()
export class CounterService {

  activeCount = new BehaviorSubject(0);
  inactiveCount = new BehaviorSubject(0);
  
  constructor() {}
  recount(active: string[], inactive: string[]) {
    this.activeCount.next(active.length);
    this.inactiveCount.next(inactive.length);
  }

  observeActiveCount() {
    return this.activeCount.asObservable();
  }

  observeInactiveCount() {
    return this.inactiveCount.asObservable();
  }
  
}
