import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
count:number = 200;
  constructor() { }

  reduceCount(){
  	if(this.count > 100){
  	 return	this.count = this.count - 100;
  	} else {
      return this.count = 50;
    }
  }

  increaseCount(){
  	return this.count =this.count + 100;
  }
}
