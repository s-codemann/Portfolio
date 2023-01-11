import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from "@angular/common/http"
import { Message } from '../message';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpreq:HttpClient) { }

  sendMessage(message:Message){
    let headers ={
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
   let url="https://sendmail-2xls.onrender.com/email"
  // let url="http://localhost:3000/email"
    return this.httpreq.post(url,message)
  }
}
