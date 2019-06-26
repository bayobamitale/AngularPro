import { Component, OnInit } from '@angular/core';
import { AddServeService } from '../add-serve.service';

@Component({
  selector: 'app-add-serve',
  templateUrl: './add-serve.component.html',
  styleUrls: ['./add-serve.component.css']
})
export class AddServeComponent implements OnInit {
   serverStrings : string[];
  constructor(private server:AddServeService) { 
    
  }


  ngOnInit() {
      this.serverStrings = this.server.serverStrings;
  }

}
