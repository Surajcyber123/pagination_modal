import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';

import { PopupComponent } from './popup/popup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pagination';
  constructor(private auth: AuthService, private dialogRef: MatDialog ){}
  ngOnInit(){
    this.getData(); 
  }
  p:any;
  data:any=[];
  getData() {
    this.auth.getData().subscribe(
      (data: any) => { this.data = data;
      }
    );
  }
  openDialog(){
    this.dialogRef.open(PopupComponent);
  }
}
