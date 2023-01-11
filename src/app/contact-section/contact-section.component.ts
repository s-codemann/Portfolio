import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormControl, FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Message } from '../message';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit, AfterViewInit {
@ViewChild("myForm") myForm:any

request = new Message("","","","")

submit(){
  this.EmailService.sendMessage(this.request)
  .subscribe(
    data => console.log(data),
    error => console.error(error)
    
  )
}
  constructor(private EmailService:EmailService) {
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

    
    
  }

}
