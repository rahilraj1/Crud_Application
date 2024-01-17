import { Component } from '@angular/core';
import { DatabaseService } from '../Services/database.service';
@Component({
  selector: 'app-visible',
  templateUrl: './visible.component.html',
  styleUrls: ['./visible.component.less']
})
export class VisibleComponent 
{
  id=1
  dataObj:any=
  {
     prodName:'',
     prodCat:'',
     date:'',
     desc:'',
     comment:'',
     price:0
  }
  constructor(private dbs:DatabaseService)
  {
      this.dbs.getProduct().subscribe({
         next:(res)=>
         {
            for(let ele of res)
            {
               this.id=this.dbs.visibilityid
               if(ele.id==this.id)
               {
                  console.log(this.id)
                  this.dataObj.prodName=ele.name
                  this.dataObj.prodCat=ele.cat
                  this.dataObj.date=ele.date
                  this.dataObj.desc=ele.desc
                  this.dataObj.comment='Give it a try',
                  this.dataObj.price=ele.price
               }
            }
         },
         error:()=>
         {
            alert('Error Occured')
         }
      })
  }
}
