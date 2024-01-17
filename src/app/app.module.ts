import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DetailsComponent } from './details/details.component';
import { VisibleComponent } from './visible/visible.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogBoxComponent,
    DetailsComponent,
    VisibleComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,MatToolbarModule,MatButtonModule,MatDialogModule,MatInputModule,
    MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatCardModule,MatDividerModule,
    MatListModule,MatTableModule,HttpClientModule,
    ReactiveFormsModule,MatSelectModule,MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
