import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// DATA SERVICE
@Injectable({ providedIn: 'root' })
export class DataService {
  data$: BehaviorSubject<number> = new BehaviorSubject(-1);

  update(value: number) {
    this.data$.next(value);
  }
}

// COMPONENTE 1: SENDER
@Component({
  selector: 'app-combo1',
  template: `
    <h1>Combo 1: {{count}}</h1>
    <button (click)="add()">Add</button>
  `,
})
export class Component1 {
  count = 0;
  constructor(private dataService: DataService) {
    setInterval(() => {
      this.add();
    }, 2000);
  }

  add() {
    this.dataService.data$.next(++this.count);
  }
}

// COMPONENTE 2: RECEIVER
@Component({
  selector: 'app-combo2',
  template: `
    <h1>Combo 2 Receiver: {{dataservice.data$ | async}}</h1>
  `,
})
export class Component2 {
  constructor(public dataservice: DataService) {}
}

// COMPONENTE ROOT
@Component({
  selector: 'my-app',
  template: `
    <h1>RxJS - Subject Demo</h1>
    <app-combo1></app-combo1>
    <app-combo2></app-combo2>
  `,
})
export class AppComponent {}
