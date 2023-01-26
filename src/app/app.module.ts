import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactIconComponent } from './contact-icon/contact-icon.component';
import {HostListener} from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactSectionComponent } from './contact-section/contact-section.component'
import {FormsModule} from "@angular/forms";
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import {RouterModule, Routes} from "@angular/router";
import { IndexComponent } from './index/index.component';
import { LegalComponent } from './legal/legal.component'

const myRoutes: Routes =[
 { path:"datenschutz", component: DatenschutzComponent},
 {path:"impressum",component:ImpressumComponent},
 {path:"",component:IndexComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactIconComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactSectionComponent,
    DatenschutzComponent,
    ImpressumComponent,
    IndexComponent,
    LegalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes, {scrollPositionRestoration:"enabled"}),
    
    
  
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
