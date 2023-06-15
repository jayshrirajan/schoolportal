import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
 submenu=[];
 submenulist:any;
 menuList:any;
 sublist:any;
 listitems:any=[];
  menuitems: any=[];
  menu!: any;
  IdList: any;
  paramValue:any;
  displayItems:any;
  id: any;
  name: any;
  menunames=[];
  // getname!:String;
  list!: any[];
  mysubmenu:any=[];
  mysublist:any=[];
  subname:any=[];
  menuid:any=[];
  present=false;
  
  
  

  constructor(private router :Router,private httpClient:HttpClient,private menuservice:MenuService,private activatedroute:ActivatedRoute,
    ){}

    
  ngOnInit(): void { 


    this.refreshmenuitems();
    //this.refreshmenu();
    
    //  this.paramValue = this.activatedroute.snapshot.paramMap.get('name');
    
    // console.log(this.paramValue);
    //  this.getnames();
    
     
    //  var str = " ";
    //  var splits = str.split(" ");
    //  console.log(splits);
 
  } 
  isCollapsed = false;
  
  
  refreshmenuitems(){
    
    this.menuservice.getmenuitems().subscribe(data=>{
      
     this.submenulist=data;
     this.submenulist=this.submenulist.screen;
     console.log(this.submenulist);
     
      this.submenulist.map((value:any)=>{
        this.submenu=value.name.split(".");

        let list={
          name:this.submenu[0],
          subname:this.submenu[1],
          

        }
        this.subname.push(list);
        
        
      })
      
     this.subname=this.remove(this.subname,'name');
      
      
      this.subname.forEach((value:any)=>{
        
        if(value.subname=='Create'){
           this.present=true;
          this.menuid.push(value);
          
         }
      })
      
       this.submenulist.forEach((element:any) => { 

        this.submenu=element.name.split(".");
        console.log(this.submenu[0]);
        //console.log(this.submenu);
        //this.submenulist.push(this.submenu[1]);
        this.mysubmenu.push(this.submenu[0],this.submenu[1]);
       
       
         //this.submenulist.forEach((element:any)=>{
          //console.log(element);
          
          // this.submenu=element.name.split(".");
          // if(this.mysubmenu[1]==this.mysublist[1]){
            //console.log(this.submenu[1]);
            
        this.mysublist.push(this.submenu[2]);
     
        //}
      // });
       this.mysublist=[...new Set(this.mysublist)];
      // console.log(this.mysublist);
       
         if(this.submenu[1]){
         this.listitems.push(this.submenu[2]);
           this.listitems=[...new Set(this.listitems)];
          
         }
        
        //  }
      });

     
      this.mysubmenu=[...new Set(this.mysubmenu)];
      //console.log(this.mysubmenu);
      
      this.mysublist=[...new Set(this.mysublist)];
        //console.log(this.mysublist);

        
      // this.submenulist.forEach(list=>{
      //   this.count=this.count+1;
      //   // console.log(this.count);
      //   this.menuList = list;
      //   // console.log(this.menuList);
      //   let value="user" +this.count; 
      //   this.sublist.push(value);
      //   // this.sublist= [...new Set(this.menunames)];
        
        
      // })
      // console.log(this.sublist);
      
    });
    
  }
  //  refreshmenu(){
  //    this.menuservice.getmenuitems().subscribe(data=>{
  //      this.menu=data;
       
      
    
  //   });
  // }
 
  // getnames(){
  //   this.activatedroute.params.subscribe(params => {
  //     // this.id = params['id'];
  //     //console.log(params);
  //     // this.menuservice.name=params['name'];
  //     this.menuservice.name = params['name'];
      
  //   });
  //   let getname=this.menunames[this.name-1];
  //   this.refreshmenuitems(getname);
    
    
  // }

menulist(e:any){
 // e.preventDefault();
}

// to remove the duplicates screens
remove(array:any[],property:string):any[]{
  return array.filter((obj,index,self)=>
 index=== self.findIndex((o)=>o[property]===obj[property]));
}

}


