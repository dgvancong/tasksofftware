import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  isCollapsed = false;
  dot = true;
  isVisible = false;

  showContent: boolean = true;

  hideContent() {
    this.showContent = false;
  }

  showModal(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
}
