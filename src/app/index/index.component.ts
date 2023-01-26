import { Component, OnInit } from '@angular/core';import{HostListener} from '@angular/core'
import { timeout } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
  }
  title = 'simplePortolio-sb';
  showNav=true;
  yOffset:number =0;
  disappearIntvs:any=[]
@HostListener('window:scroll', ['$event'])
public onWindowScroll($event:Event){
  let newYOffset = window.pageYOffset;
  let disappearTimeout;
if(newYOffset>this.yOffset){
this.disappearIntvs.push(setTimeout(()=>{this.showNav=false; },10))
}




else {this.disappearIntvs.forEach((intv:any)=>
  clearTimeout(intv)
);
this.showNav=true}

this.yOffset = newYOffset;
}
}
