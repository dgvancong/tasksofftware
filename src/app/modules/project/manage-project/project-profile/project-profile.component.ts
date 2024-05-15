import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-profile',
  standalone: false,
  templateUrl: './project-profile.component.html',
  styleUrl: './project-profile.component.scss'
})
export class ProjectProfileComponent {
  @Input() countDelete: number | undefined;
}
