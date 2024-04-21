import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    emailAddress: '',
    password: ''
  };
  passwordVisible = false;
  constructor( private router: Router) { }

  login() {
    // this.authService.login(this.user).subscribe(
    //   (response) => {
    //     this.message.success('Đăng nhập thành công').onClose.subscribe(() => {
    //     this.router.navigate(['/home/welcome']);
    //     });
    //   },
    //   (error) => {
    //     this.message.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.', error);
    //   }
    //   );
  }
  showPassword = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
