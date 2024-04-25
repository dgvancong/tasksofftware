import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/project.service';
import { Project } from '../../../../models/interface/project';


@Component({
  selector: 'app-project-views',
  standalone: false,
  templateUrl: './project-views.component.html',
  styleUrl: './project-views.component.scss'
})
export class ProjectViewsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
  ){}

  ngOnInit(): void {
    this.getProejct();
  }

  getProejct(): void {
    this.projectService.getProejct().subscribe(
      (response) => {
        this.projects = response.data;
      },
      (error) => {
        console.error('Thông tin dữ liệu dự án lỗi:', error);
      }
    );
  }
}
