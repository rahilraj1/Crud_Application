import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from '../Services/database.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent {
  name:string=''
  id=0
  constructor(private matD:MatDialog,private dbs:DatabaseService)
  {
    this.id=dbs.iid
    this.name=dbs.nameDel 
  }
  deleting(idhere:any)
  {
      console.log('Hello',this.name)
      this.dbs.deleteProduct(idhere).subscribe({ 
        next:(res)=>
        {
           console.log('Product Deleted Successfully')
        },
        error:()=>
        {
            alert('Error Occured While Deleting')
        }
      })
  }
}
