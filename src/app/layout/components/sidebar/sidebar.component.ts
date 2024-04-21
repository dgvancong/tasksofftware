import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RouterModule } from '@angular/router';


import { ProjectService } from '../../../modules/project/project.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NzInputModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  isCollapsed: boolean = false;
  projects: any[] = [];

  constructor( private projectService: ProjectService){}
  ngOnInit(): void {
    this.getProejct();
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  getProejct(): void {
    this.projectService.getProejct().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}
