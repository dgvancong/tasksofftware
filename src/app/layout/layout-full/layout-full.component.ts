import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-layout-full',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './layout-full.component.html',
  styleUrl: './layout-full.component.scss'
})
export class LayoutFullComponent {

}
