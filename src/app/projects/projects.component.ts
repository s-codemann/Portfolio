import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

projects:Array<any>=[
  {
    name:"Join",category:"javascript",imgLink:"assets/img/kanban.png",githubLink:"https://github.com/s-codemann/MyKanban",liveLink:"https://kanban-sb.netlify.app"
  },
  {name:"pokedex",category:"javascript",imgLink:"assets/img/pokedex.png",githubLink:"https://github.com/s-codemann/Pokedex",liveLink:"https://pokedex-sb.netlify.app"},
  {name:"El pollo loco",category:"javascript",imgLink:"assets/img/polloloco.png",githubLink:"https://github.com/s-codemann/polloLoco",liveLink:"https://polloloco.netlify.app"},
  {name: "This Website", category:"angular",imgLink:"assets/img/portfolio.png",githubLink:"https://github.com/s-codemann/Portfolio",liveLink:"/#"}

 
]
filteredProjects:Array<any>=this.projects
showCategory:Array<string>=["angular","javascript"]
highlightAngular:boolean=true
highlightJavascript:boolean=true
highlightAll:boolean=true;
  filterProjects(selection:string){
    this.filteredProjects = this.projects
    switch(selection){
        case "all":this.showCategory=["angular","javascript","all"];
        break;
        case "javascript":this.showCategory=["javascript"];
        break;
        case "angular":this.showCategory=["angular"];
        break;

      }
      
  this.filteredProjects = this.projects.filter(project=> this.showCategory.find(categoryToShow=> categoryToShow === project.category)=== project.category)
  this.highlightAll=false;
  this.highlightAngular=false;
  this.highlightJavascript=false;
this.filteredProjects.forEach(proj=>{

  if(proj.category==="angular"){
    this.highlightAngular = true;
  }if(proj.category==="javascript"){
    this.highlightJavascript = true;
  }
  if(this.highlightAngular ===true && this.highlightJavascript ===true){
    this.highlightAll = true;
  }
})

 }
  constructor() { }

  ngOnInit(): void {
  }

}
