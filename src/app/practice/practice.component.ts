import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit{
  testStringWithNot !: String ;
  simpleTestString : String ="hello";
  
  username !: String ;
  flag = false;
  logArray = [0];
  sortType ="";
  sortThisArray=[{name:"Abhishek", rollNo: 12},
                  {name:"Shubham", rollNo:10}]
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
 this.testStringWithNot = "assigned inside onInit";
  }
 
  resetUsername(){
   this.username = "";
  }
 }
 
