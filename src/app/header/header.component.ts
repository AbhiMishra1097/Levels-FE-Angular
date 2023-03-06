import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
 username : String ='';
 flag = false;
 logArray = [0];
 counter = 0;
 
 getColor(){
  if(this.counter >= 5){
    return "blue";
  }
  else{
    return "white";
  }
 }
 
 handleClick(){
 // this.flag = !this.flag; 
  
  this.logArray.push(++this.counter);
  
 }

 

 ngOnInit(){

 }

 resetUsername(){
  this.username = "";
 }
}
