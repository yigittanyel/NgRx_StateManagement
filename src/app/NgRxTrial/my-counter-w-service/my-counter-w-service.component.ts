import { Component } from '@angular/core';
import { CounterServiceService } from 'src/app/services/counter-service.service';

@Component({
  selector: 'my-counter-wService',
  templateUrl: './my-counter-w-service.component.html',
  styleUrls: ['./my-counter-w-service.component.css']
})
export class MyCounterWServiceComponent {

  constructor(public _service: CounterServiceService ) {
   }

  increment() {
    this._service.increment();
  }

  decrement() {
    if(this._service.count > 0)
      this._service.decrement();
  }

  reset() {
    this._service.reset();
  }

}
