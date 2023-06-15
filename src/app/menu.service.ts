import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'withCredentials': 'true'
  })
};



@Injectable({
  providedIn: 'root'
})
export class MenuService {
  roledata:any[]=[];
  demoname="";
  
  private baseUrl = 'http://localhost:8086';
  httpClient: any;
  name:any[]=[];

  
  constructor(private http: HttpClient) { }


  getmenuitems():Observable<any[]>{
     //return this.http.get<any>(this.baseUrl+`/api/permissions/GetScreens/${name}`);
   return this.http.get<any>(this.baseUrl+'/api/permissions/GetScreens/User');
  
  }

// getmenuUser():Observable<any[]>{
//   return this.http.get<any>(this.baseUrl+'/api/permissions/GetPermissions');
// }

  
  }
  
  
  
 

  



  


