import { Component, OnInit } from '@angular/core';
import { CounterService } from "app/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  active;
  inactive;
  constructor(private counter: CounterService) {}

  ngOnInit() {

    this.counter.observeActiveCount()
    .subscribe(count => this.active = count);
    
    this.counter.observeInactiveCount()
    .subscribe(count => this.inactive = count);

  }
}
