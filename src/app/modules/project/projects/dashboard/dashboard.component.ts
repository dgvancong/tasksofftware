import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  statusView: any = 1;

  constructor (){

  }
  ngOnInit(): void {

  }

}
