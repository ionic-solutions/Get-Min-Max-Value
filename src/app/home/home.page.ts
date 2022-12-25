import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public min_N :any;
  public max_N :any;
  public all_N :any;

  constructor() {}

 

  ngOnInit(){

    var numbers = [25, 45, 15, -5, 73, 6];

    this.all_N = numbers;
    //find the max value from array javascript
    var maxValue = Math.max.apply(null, numbers);


    document.write(maxValue + '<br>'); // output:73
    // alert(maxValue + ' This is the max value');
    this.max_N = maxValue;
    
    //find the min value from array javascript
    var minValue = Math.min.apply(null, numbers);

    document.write(minValue + '<br>'); // output:-5
    // alert(minValue + ' This is the min number');
    this.min_N = minValue;

    console.log(numbers + ' All numbers');
    console.log(maxValue + ' Max numbers');
    console.log(minValue + ' Min numbers');
    

  }


}
