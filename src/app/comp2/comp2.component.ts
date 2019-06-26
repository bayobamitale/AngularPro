import { Component, OnInit } from '@angular/core';
import { AddServeService } from '../add-serve.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
    messages : string[] ;
    serverStrings : string[];
  constructor(private addServe: AddServeService) {

     this.messages = ["Item number 1", "Item number 2", "Item Number 3"];

     this.serverStrings = addServe.serverStrings;

   }
   

  ngOnInit() {
  }
}
