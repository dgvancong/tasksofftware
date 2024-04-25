import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/project.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Project } from '../../../../models/interface/project';



@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private notification: NzNotificationService
  ){}

  ngOnInit(): void {
    this.getProejct();
  }

  getProejct(): void {
    this.projectService.getProejct().subscribe(
      (response) => {
        this.projects = response.data;
        console.log(response)
      },
      (error) => {
        console.error('Thông tin dữ liệu dự án lỗi:', error);
      }
    );
  }
}
