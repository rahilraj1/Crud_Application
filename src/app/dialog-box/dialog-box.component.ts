import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { DatabaseService } from '../Services/database.service';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.less']
})
export class DialogBoxComponent implements OnInit 
{
  selected = 'New'
  preAdded: boolean = false;
  myData:Array<any>=[]
  formData = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      cat: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      freshness: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    }
  )
  ngOnInit()
  {
    this.dbs.getProduct().subscribe({
      next: (res) => {
        this.myData=res
      }
    })
  }
  getData(val:any)
  {
      this.preAdded=false;
      for(let ele of this.myData)
      {
         if(ele.name==val.name && ele.freshness==this.selected) 
         {
           console.log(`${ele.name}==${val.name} && ${ele.freshness}==${this.selected}`)
           this.preAdded=true
         }
      }
  }
  constructor(private dialog: MatDialog, private dbs: DatabaseService) { }
  onSave() {
    
    this.getData(this.formData.value)
    this.formData.value.freshness = this.selected;
    if (this.preAdded == false) {
      console.log('Data Added')
      this.dbs.postProduct(this.formData.value).subscribe({
        next: (res) => {
          this.dialog.closeAll()
        },
        error: () => {
          alert('Error While Adding The Product')
        }
      }
      )
    }
  }
  onSelected(event: any) {
    console.log(event.target.value)
  }
  onReset() {
    this.formData.reset()
  }
}
