import { interval,Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  private firstObs:Subscription;

  

  constructor() { }
  

  ngOnInit(): void {
    // Create an Observable that will publish a value on an interval
const secondsCounter = interval(5000);
// Subscribe to begin publishing values
this.firstObs=secondsCounter.subscribe(n =>
  console.log(`It's been ${n} seconds since subscribing!`));

  }
  ngOnDestroy(): void{
    this.firstObs.unsubscribe();
  }

}
