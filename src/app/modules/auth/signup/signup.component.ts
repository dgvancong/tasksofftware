import { Component, OnInit } from '@angular/core';
import { Role } from '../../../models/interface/roles';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  user = {
    picture: '/assets/icon/auth/ee2660df9335718b1a80.svg',
    fullName: '',
    password: '',
    emailAddress: '',
    phoneNumber: '',
    roleID: ''
  };
  showPassword = false;
  selectedValue: any;
  passwordVisible = false;
  roles: Role[] = [];


  constructor(){}
  ngOnInit(): void {

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  fetchRoles() {
    // this.rolesService.getRoles().subscribe(
    //   (response) => {
    //     this.roles = response.data;
    //   },
    //   (error) => {
    //     console.error('Error fetching roles:', error);
    //   }
    // );
  }
  registerUser() {
    // this.authService.registerUser(this.user).subscribe(
    //   (response) => {
    //     this.message.success('Đăng ký thành công.');
    //   },
    //   (error) => {
    //     this.message.error('Đăng ký thất bại. Vui lòng kiểm tra lại thông tin đăng ký.');
    //   }
    // );
  }
}
