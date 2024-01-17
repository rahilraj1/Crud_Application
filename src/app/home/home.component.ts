import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { DatabaseService } from '../Services/database.service';
import { DetailsComponent } from '../details/details.component';
import { VisibleComponent } from '../visible/visible.component';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  tryData: Array<any> = []
  value="and"
  isSearched:boolean=false;
  myData:any={}
  displayedColumns: string[] = ['prodName', 'prodCat', 'date','freshness', 'desc', 'price', 'action'];
  dataSource:MatTableDataSource<any>=new MatTableDataSource;
  @ViewChild(MatPaginator)matPagin!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;
  constructor(public dialog: MatDialog, private dbs: DatabaseService) { 
  }
  ngOnInit(): void {
     this.getAllProducts() 
    
  }
  onSearch()
  {
    this.isSearched=true;
     console.log('Entered')
  }
  onSearching(val:any)
  {
     console.log(val)
     this.getAllProducts()
     this.value=val
  }
  getAllProducts()
  {
      console.log('Get all Product Called Gaia')
      if(this.isSearched==false)
      {
        this.dbs.getProduct().subscribe({
          next:(res)=>
          {
              
               this.dataSource=new MatTableDataSource<any>(res);
               this.dataSource.paginator=this.matPagin;
               this.dataSource.sort=this.sort
          },
          error:()=>
          {
              alert('Error Found')
          }
        })
        if(this.matPagin)
        {
          this.dataSource.paginator=this.matPagin
        }
      }
      else
      {
        this.dbs.getProduct().subscribe({
          next:(res)=>
          {
              for(let ele of res)
              {
                this.value=this.value.substring(0,4)
                ele.name=ele.name.substring(0,4)
                console.log(`${ele.name} and ${this.value}`)
                if(ele.name==this.value)
                {
                   this.visible(ele.id)
                }
              }
          },
          error:()=>
          {
              alert('Error Found')
          }
        })
        if(this.matPagin)
        {
          this.dataSource.paginator=this.matPagin
        }
      }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: "33%"
    });
  }
  openDialog2(data:any):void
  {
    this.dbs.iid=data.id;
    console.log(data.name)
    this.dbs.nameDel=data.name
    console.log(this.dbs.iid)
    const dialogRef=this.dialog.open(DetailsComponent,{data})
  }
  visible(data:any):void
  {
     this.dbs.visibilityid=data;
     const dialogRef=this.dialog.open(VisibleComponent,{data,width:'25%'})
  }
}
