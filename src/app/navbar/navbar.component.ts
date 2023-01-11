import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { keyframes, trigger,state,style,animate,transition } from '@angular/animations';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:[trigger("showHide",[state("visible",style({opacity:1})),state("hidden",style({opacity:0,visibility:"hidden", translate: "0 -150px"})),transition("visible => hidden",animate("500ms")),transition("hidden => visible",animate("300ms"))])],

})

export class NavbarComponent implements OnInit,AfterViewInit {
  @Input() showNav:boolean = true;

  @ViewChild("burger") burger:any;
showLinks:boolean=false;
  scroll(id:string){
    let element = document.getElementById(id);
    let yOffset = 0;
    let y = element?.getBoundingClientRect().top! + window.pageYOffset + yOffset
   
    window.scrollTo({top:y, behavior:"smooth"})
  }

  toggleBurger(){
    let burgerButton = this.burger.nativeElement;
    let linksCont = burgerButton.parentElement;
    burgerButton.classList.toggle("expanded")
   burgerButton.classList.contains("expanded") ? this.showLinks=true :this.showLinks=false;


  }

constructor(){}

  ngOnInit(): void {

   }
  ngAfterViewInit(): void {
  }
}
