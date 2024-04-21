import { Component, OnInit } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule} from 'ng-zorro-antd/drawer';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SplitterModule } from 'primeng/splitter';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { formatDate } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';
// import { TaskService } from '../../../../../modules/task/task.service';
import { ProjectService } from '../../../../../modules/project/project.service';
import { Project } from '../../../../../models/interface/project';
import { AuthService } from '../../../../../modules/auth/auth.service';



@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    NzDropDownModule,
    NzDrawerModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ButtonModule,
    EditorModule,
    FormsModule,
    NzTableModule,
    SplitterModule,
    NzIconModule,
    NzModalModule,
    NzTabsModule,
    ReactiveFormsModule,
    NzAlertModule,
    NzSelectModule,
    NzDatePickerModule,
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent implements OnInit {
  isVisible = false;
  projects: Project[] = [];
  projectData: any;
  userData: any;
  teamID : any;
  teamData: any;
  dateFormat = 'yyyy-MM-dd';

  task = {
    projectID: '',
    taskType: '',
    summary: '',
    userID: '',
    status: 'To Do',
    createdDate: '',
    endDate: '',
    priority: '',
    description: '',
    taskDescription: 'Create marketing materials for campaign',
    actualHoursSpent: '',
    taskManagerID: ''
  };

  constructor(
    private route: ActivatedRoute ,
    // private taskService: TaskService,
    private modal: NzModalService,
    private authService: AuthService,
    private projectService: ProjectService
    ){}

  ngOnInit(): void {
    this.userLogin();
    this.getProjectTeamID();
    this.getProjectData();
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isVisible = false;
    const formattedCreatedDate = formatDate(this.task.createdDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    this.task.createdDate = formattedCreatedDate;
    this.task.endDate = formattedCreatedDate;
    // this.taskService.addTask(this.task).subscribe(
    //   (response) => {
    //     this.modal.success({
    //       nzTitle: 'Thành công',
    //       nzContent: 'Tạo công việc thành công',
    //       nzOnOk: () => {
    //         window.location.reload();
    //       }
    //     });
    //   },
    //   (error) => {
    //     this.modal.error({
    //       nzTitle: 'Lỗi',
    //       nzContent: 'Tạo công việc thất bại',
    //     });
    //   }
    // );
  }
  getProjectData() {
    this.projectService.getProejct().subscribe(
      (response) => {
        this.projects = response.data;
      },
      (error) => {
        console.error('Lỗi dữ liệu về thông tin dự án:', error);
      }
    );
  }
  userLogin(){
    const userID = localStorage.getItem('userID');
    this.authService.getUserInfo(userID).subscribe(
      (data) => {
        this.userData = data.userLogin;
      },
      (error) => {
        console.error('Không có dữ liệu từ người dùng', error);
      }
    );
  }
  getProjectTeamID(){
    this.route.params.subscribe((params) => {
      this.teamID = + params['id'];
      this.projectService.getProjectTeamID(this.teamID).subscribe(
        (data) => {
          this.teamData = data.projectTeam;
          console.log("Thành viên dự án :",this.teamData);
        },
        (error) => {
          console.error('Error fetching project team data:', error);
        }
      );
    });
  }

}
