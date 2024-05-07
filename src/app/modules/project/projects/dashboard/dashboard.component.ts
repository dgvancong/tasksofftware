import { Component, OnInit, Output } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { UserService } from './../../../../service/user.service';

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
  userData: any;
  constructor(
    private i18n: NzI18nService,
    private userService: UserService,

  ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }
  showAddProject() : void{
    this.isProject = true;
  }

  getUserInfo(): void {
    const userID = localStorage.getItem('userID');
    this.userService.getUserInfo(userID).subscribe(
      (data) => {
        this.userData = data.userLogin;
        console.log(this.userData,"userdata");

      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

}
