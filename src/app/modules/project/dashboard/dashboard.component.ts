import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showContent: boolean = true;

  hideContent() {
    this.showContent = false;
  }
}
