import { Component, OnInit, Output } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  statusView: any = 1;
  isProject = false;
  dateFormat = 'dd-MM-yyyy';

  constructor(private i18n: NzI18nService) {}

  ngOnInit(): void {

  }
  showAddProject() : void{
    this.isProject = true;
  }

}
