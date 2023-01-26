import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormControl, FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Message } from '../message';
import { EmailService } from '../services/email.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit, AfterViewInit {
@ViewChild("myForm") myForm:any;


request = new Message("","","","");
loading:boolean=false;
formSubmitted:boolean=false;

submit(){
  this.loading=true;
  this.EmailService.sendMessage(this.request)
  .subscribe(
    data => {console.log(data); this.loading = false; this.formSubmitted=true},
    error => console.error(error)
    
  )
}

enableForm(){
  this.formSubmitted=false;
}
  constructor(private EmailService:EmailService) {
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

    
    
  }

}
