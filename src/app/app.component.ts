import { Component,AfterViewInit,AfterViewChecked,ViewChild } from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
names = 'Angular';
timeChange;
//  name = 'mrms'
  @ViewChild(HomeComponent,{static:false})viewhello :HomeComponent;

  ngAfterViewInit(){
      console.log(this.viewhello)
      setTimeout(()=>{
      this.viewhello.names = "Angular After ngAfterViewInit"
    },0)
      
  }
 ngAfterViewChecked(){
          // this.timeChange = this.viewhello.content
          // console.log(this.viewhello.content);
          setTimeout(()=>{
            this.timeChange = this.viewhello.content;
          },0);
        
  }

 
  name = 'Angular';
  mms ="rr"

  constructor(){
    setInterval(() => { this.name = new Date().toLocaleTimeString()}, 100);
  }

  contentChanged(content){
    // console.log(content);
    this.mms = content;
   
  }
}
