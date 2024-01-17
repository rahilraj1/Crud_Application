import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService 
{
  iid=1;
  nameDel=''
  visibilityid=1;
  constructor(private http:HttpClient) 
  {
     
  }
  postProduct(data:any)
  {
     return this.http.post<any>("http://localhost:3000/posts",data)
  }
  getProduct()
  {
     return this.http.get<any>("http://localhost:3000/posts");
  }
  deleteProduct(id:any)
  {
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
  }
}
