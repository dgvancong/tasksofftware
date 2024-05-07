import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { UserService } from '../../../../service/user.service';
import { TeamService } from '../../../../service/team.service';
import { ProjectService } from '../../../../service/project.service';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-board',
  standalone: false,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class AvatarComponent implements OnInit {
  isTeamMember = false;
  teamID : any;
  teamData: any;
  TaskData: any;
  projectID : number = 0;
  isVisible = false;
  users: any[] = [];
  teams: any[] = [];
  roles: any[] = [];
  dateFormat = 'yyyy-MM-dd';
  teammenber = {
    teamID: '',
    userID: '',
    joinDate: ''
  };
constructor(
  private route: ActivatedRoute,
  private userService: UserService,
  private teamService: TeamService,
  private projectService : ProjectService,
  private notification: NzNotificationService,
){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectID = params['id'];
    });
    this.fetchUser();
    this.fetchTeams();
    this.getProjectData();
    this.fetchProjectTeamData();
  }
  fetchProjectTeamData(): void {
    this.route.params.subscribe((params) => {
      const teamID = +params['id'];
      this.projectService.getProjectTeamID(teamID).subscribe(
        (data) => {
          this.teamData = data.projectTeam;
          console.log("Thành viên dự án :", this.teamData);
        },
        (error) => {
          console.error('Error fetching project team data:', error);
        }
      );
    });
  }
  getProjectData() {
    if (this.projectID) {
      this.projectService.getProjectById(this.projectID).subscribe(
        (data) => {
          this.TaskData = data;
        },
        (error) => {
          console.error('Lỗi khi lấy dự án theo ID:', error);
        }
      );
    } else {
      console.error('projectId không được định nghĩa. Không thể lấy dự án theo ID.');
    }
  }
  showsTeamMember(): void {
    this.isTeamMember = true;
  }
  OksTeamMember(): void {
    const formattedCreatedDate = formatDate(this.teammenber.joinDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    this.teammenber.joinDate = formattedCreatedDate;
    this.teamService.addTeammenber(this.teammenber).subscribe(
      (response) => {
        this.notification.success(

          'Thêm thành viên thành công',
          'Danh sách thành viên đã được cập nhật.'
        );
        this.teamData = response.projectTeam;
      },
      (error) => {
        console.log('teammenber.teamID:', this.teammenber.teamID);
        this.notification.error(
          'Thêm thành viên không thành công',
          'Xem lại thông tin thêm mới thành viên.'
        );
      }
    );
    this.isTeamMember = false;
  }
  getRoleName(roleID: any): string {
    const role = this.roles.find(r => r.roleID === roleID);
    return role ? role.roleName : '';
  }
  fetchTeams() {
    this.teamService.getTeams().subscribe(
      (response) => {
        this.teams = response;
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }
  fetchUser() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }
}
