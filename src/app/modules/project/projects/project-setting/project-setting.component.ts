import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-setting',
  standalone: false,
  templateUrl: './project-setting.component.html',
  styleUrl: './project-setting.component.scss'
})
export class ProjectSettingComponent {
  @Input() countDisable: number | undefined;

  constructor (){

  }
}
