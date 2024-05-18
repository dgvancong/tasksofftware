import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TeamService } from '../../../service/team.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProjectService } from '../../../service/project.service';
import { saveAs } from 'file-saver';
interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-list',
  standalone: false,
  providers: [
    DatePipe,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();
  projectId : any;
  projectData : any;
  teamData: any;
  TaskData: any;
  users: any[] = [];
  isTeamMember = false;
  priorityMap: { [key: number]: string } = {
    1: 'Lowest',
    2: 'Low',
    3: 'Medium',
    4: 'High',
    5: 'Highest'
  };
  dateFormat = 'yyyy-MM-dd';
  teammenber = {
    teamID: '',
    userID: '',
    joinDate: ''
  };

  constructor(
    private taskServices: TaskService,
    private router : Router,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private projectService: ProjectService,
    private notification: NzNotificationService,
   ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
    });
    this.getTaskProjectData();
    this.fetchProjectTeamData();
  }
  fetchProjectTeamData(): void {
    this.route.params.subscribe((params) => {
      const teamID = +params['id'];
      this.projectService.getProjectTeamID(teamID).subscribe(
        (data) => {
          this.teamData = data.projectTeam;
        },
        (error) => {
          console.error('Error fetching project team data:', error);
        }
      );
    });
  }
  getTaskProjectData() {
    if (this.projectId) {
      this.taskServices.getTaskProjectById(this.projectId).subscribe(
        (data) => {
          this.projectData = data;
          console.log(this.projectData);

        },
        (error) => {
          console.error('Lỗi khi lấy dự án theo ID:', error);
        }
      );
    } else {
      console.error('projectId không được định nghĩa. Không thể lấy dự án theo ID.');
    }
  }
  downloadExcel(): void {
    this.taskServices.downloadExcel().subscribe((data: Blob) => {
      saveAs(data, 'Dữ liệu công việc.xlsx');
    });
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }
  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }
  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }
}
