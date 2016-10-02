import {Component} from '@angular/core';
import {CounterComponent} from './counter/counter.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  directives: [
      CounterComponent
    ]
})
export class AppComponent {
    public myValue:number = 2;
      myValueChange(event) {
        console.log(event);
      }
}