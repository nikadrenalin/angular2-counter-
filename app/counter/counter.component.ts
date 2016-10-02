import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './app/counter/counter.component.html',
  styleUrls: ['./app/counter/counter.component.css']
})
export class CounterComponent {
  @Input() counterValue = 0;
  @Output('change') counterChange = new EventEmitter();
  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
}