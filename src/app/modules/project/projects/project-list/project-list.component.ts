import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/project.service';
import { TeamService } from './../../../../service/team.service';
import { UserService } from '../../../../service/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';
import { formatDate, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
  providers: [
    DatePipe,
  ],
})
export class ProjectListComponent implements OnInit {
  projects: any[] = [];
  teams: any[] = [];
  users: any[] = [];
  isDelete = false;
  isUpdate = false;
  isProfile = false;
  dateFormat = 'dd-MM-yyyy'
  statusView: any = 1;
  isProject = false;
  projectID : any;
  UpdateProject: any = {};
  selectedProject: any;
  UpdateProfile: any = {};
  selectedProfile: any;
  project = {
    projectName: '',
    projectKey: '',
    progress: 10,
    createdDate: '',
    endDate: '',
    projectDescription: '',
    clientContactName: '',
    clientContactEmail: '',
    clientContactPhone: '',
    teamID: '',
    userID: '',
  };

  constructor(
    private projectService: ProjectService,
    private notification: NzNotificationService,
    private message: NzMessageService,
    private datePipe: DatePipe,
    private teamService: TeamService,
    private userService: UserService,
    private route: ActivatedRoute,
  ){}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectID = params['id'];
    });
    this.getProejct();
    this.fetchTeams();
    this.fetchUser();
  }
  showDelete(data: any):void {
    this.projectID = data.projectID;
    this.isDelete = true;
  }
  OkDelete(){
    this.projectService.DeleteProject(this.projectID).subscribe(
      (data: any) => {
        this.notification.success(
          'Xóa dự án thành công',
          'Danh sách dự án đã được cập nhật.'
        );
        this.getProejct();
      },
      (error) => {
        this.notification.error(
          'Xóa dự án không thành công',
          'Vui lòng kiểm tra lại thông tin dự án.'
        );
        console.error(error);
      }
    );
    this.isDelete = false;
  }
  showUpdate(selectedProject: any): void{
    console.log('showModal is called with selectedProject:', selectedProject);
    this.selectedProject = selectedProject;
    this.UpdateProject = { ...selectedProject };
    this.isUpdate = true;
  }
  editProject(){
    if (this.selectedProject) {
      const projectID = this.selectedProject.projectID;
      this.UpdateProject.createdDate = this.datePipe.transform(this.UpdateProject.createdDate, 'yyyy-MM-dd');
      this.UpdateProject.endDate = this.datePipe.transform(this.UpdateProject.createdDate, 'yyyy-MM-dd');
      this.projectService.updateProject(projectID, this.UpdateProject).subscribe(
        (data: any) => {
          this.notification.success(
            'Chỉnh sửa dự án thành công',
            'Danh sách dự án đã được cập nhật.'
          );
          this.isUpdate = false;
          this.getProejct();
        },
        (error) => {
          this.notification.error(
            'Chỉnh sửa dự án không thành công',
            'Vui lòng kiểm tra lại thông tin dự án.'
          );
          console.error(error);
        }
      );
    }
  }
  showAddProject() : void{
    this.isProject = true;
  }
  addProject(){
    const formattedCreatedDate = formatDate(this.project.createdDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    this.project.createdDate = formattedCreatedDate;
    this.project.endDate = formattedCreatedDate;

    this.projectService.addProject(this.project).subscribe(
      (response) => {
        this.notification.success(
          'Thêm dự án thành công',
          'Danh sách dự án đã được cập nhật.'
        );
        localStorage.setItem('token', response.token);
        this.getProejct();
      },
      (error) =>
        {this.notification.error(
          'Thêm dự án không thành công',
          'Vui lòng kiểm tra lại thông tin dự án.'
        );
      }
    );
    this.isProject = false;
  }
  showProfile(selectedProfile: any) : void{
    this.selectedProfile = selectedProfile;
    this.UpdateProfile = { ...selectedProfile};
    this.isProfile = true;
  }
  getProejct(): void {
    this.projectService.getProejct().subscribe(
      (response: any[]) => {
        this.projects = response;
      },
      (error) => {
        console.error('Thông tin dữ liệu dự án lỗi:', error);
      }
    );
  }
  fetchTeams() {
    this.teamService.getTeams().subscribe(
      (response) => {
        this.teams = response;
      },
      (error) => {
        console.error('Thông tin dữ liệu team bị lỗi:', error);
      }
    );
  }
  fetchUser() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Thông tin dữ liệu người dùng bị lỗi:', error);
      }
    );
  }
  createBasicMessage(): void {
    this.message.success('Đã sao chép thông tin dự án vào bộ tạm nhớ.');
  }
}
