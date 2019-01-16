import { Component } from '@angular/core';
import { NgModule  } from '@angular/core';

import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  check:boolean;
  title = 'shankview';
  data = "this string from component"

  public ButtonClicked(){
  console.log(" Button is clicked..!!!");
  }

  constructor(){
    this.check=true;
  }

}


