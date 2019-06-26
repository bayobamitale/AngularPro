import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddServeService {

  constructor() {
    this.serverStrings =  ["server string 1", "server string 2", "server string 3"];
   }

   serverStrings: string[] = [];
 
  add(message: string) {
    this.serverStrings.push(message);
  }
 
  clear() {
    this.serverStrings = [];
  }
}
