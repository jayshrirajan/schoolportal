import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MenuService } from './menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // menuitems!: any;
  // menu!: any;
  // IdList: any;
  // printId: any;
  // service: any;
  // items:any;
  // paramValue:any;
}
  

  // constructor(private router :Router,private httpClient:HttpClient,private menuservice:MenuService,private activatedroute:ActivatedRoute){}
  // ngOnInit(): void { 

  //   //this.refreshmenu();
  //    this.refreshmenuitems();
    //  this.activatedroute.paramMap.subsibe(params => {
    //   this.paramValue = params.get('id');
    //   console.log(this.paramValue);
   // });
//    this.paramValue = this.activatedroute.snapshot.paramMap.get('id');
//    console.log(this.paramValue);
  
  
    
//   }
  
  
//   isCollapsed = false;
  
  
//   refreshmenuitems(){
//     this.menuservice.getmenuitems().subscribe(data=>{
//       this.menuitems=data;
//       //  console.log(this.menuitems[0].screen);
//     });
//   }
//    refreshmenu(){
//      this.menuservice.getmenuitems().subscribe(data=>{
//        this.menu=data;
    
//     });
//   }
//   rolename(name:any){
//     for(var i=0;i<this.IdList.length;i++){
//       if(name==this.IdList[i].name)
//     {
      
//       this.printId=this.IdList[i];

//     }

//   }
// this.service.roledata = this.printId;
// console.log(this.printId);

// }
  
// }

