import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule} from 'ng-zorro-antd/drawer';
import { ButtonModule } from 'primeng/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../../../../modules/auth/auth.service';
import { Router } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';






@Component({
  selector: 'app-header-icon',
  standalone: true,
  imports: [
    CommonModule,
    NzDropDownModule,
    NzDrawerModule,
    ButtonModule,
    NzInputModule
  ],
  templateUrl: './header-icon.component.html',
  styleUrl: './header-icon.component.scss'
})
export class HeaderIconComponent implements OnInit {

  visible = false;
  userData: any;
  constructor( private router: Router, private authService: AuthService , private nzMessageService: NzMessageService){}

  ngOnInit(): void {
    this.userLogin();
  }
  userLogin(){
    const userID = localStorage.getItem('userID');
    this.authService.getUserInfo(userID).subscribe(
      (data) => {
        this.userData = data.userLogin;
      },
      (error) => {
        console.error('Không có dữ liệu từ người dùng', error);
      }
    );
  }
  openDrawer(): void {
    this.visible = true;
  }
  closDrawer(): void {
    this.visible = false;
  }
  confirm() {
    this.nzMessageService.success('Đăng xuất thành công');
    this.authService.logout();
    this.router.navigate(['user/login']);
  }
  cancel() {
    this.nzMessageService.info('Hủy');
  }

}
