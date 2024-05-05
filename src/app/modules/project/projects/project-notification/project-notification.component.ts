import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-project-notification',
  standalone: false,
  templateUrl: './project-notification.component.html',
  styleUrl: './project-notification.component.scss'
})
export class ProjectNotificationComponent implements OnInit {
  users: any[] = [];

 constructor(
  private userService: UserService,
 ){

 }
  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
        console.log(response);

      },
      (error) => {
        console.error('Thông tin dữ liệu người dùng bị lỗi:', error);
      }
    );
  }
}
