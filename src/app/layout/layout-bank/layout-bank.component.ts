import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/components/header/header.component';
import { RouterModule } from '@angular/router';
import { HeaderIconComponent } from '../components/header/components/header-icon/header-icon.component';

@Component({
  selector: 'app-layout-bank',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    HeaderIconComponent
  ],
  templateUrl: './layout-bank.component.html',
  styleUrl: './layout-bank.component.scss'
})
export class LayoutBankComponent {

}
