import { Component } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  brightnessVal = 0.40;
  valueGetBrightness:any;
  constructor(private brightness: Brightness) {
    this.brightness.setBrightness(this.brightnessVal);
  }
  adjustBrightness(){
    this.brightness.setBrightness(this.brightnessVal);
  }
}
