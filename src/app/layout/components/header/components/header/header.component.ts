import { Component } from '@angular/core';
import { HeaderIconComponent } from '../header-icon/header-icon.component';
import { HeaderNavComponent } from '../header-nav/header-nav.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderIconComponent,
    HeaderNavComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
