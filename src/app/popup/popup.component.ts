import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  // constructor(@Inject(MatDialogModule)) { }

  ngOnInit(): void {
  }

}
