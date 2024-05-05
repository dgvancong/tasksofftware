import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../../service/team.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-project-team',
  standalone: false,
  templateUrl: './project-team.component.html',
  styleUrl: './project-team.component.scss'
})
export class ProjectTeamComponent implements OnInit {

  expandSet = new Set<number>();
  dateFormat = 'dd-MM-yyyy'
  teams: any[] = [];
  teamID: number = 0;
  isDelete = false;
  isUpdate = false;
  isAddTeam = false;
  teamName: string = '';

  constructor(
    private teamService: TeamService,
    private notification: NzNotificationService,
  ){}

  ngOnInit(): void {
    this.loadTeamsAndMembers();
    this.fetchTeams();
  }
  showAddTeam(){
    this.isAddTeam = true;
  }
  okAddTeam(){
    this.teamService.addTeam(this.teamName).subscribe(
      (response) => {
        this.fetchTeams();
        this.notification.success(
          'Thêm nhóm thành công',
          'Danh sách nhóm đã được cập nhật.'
        );
      },
      (error) =>
        {
          this.fetchTeams();
          this.notification.success(
            'Thêm nhóm thành công',
            'Danh sách nhóm đã được cập nhật.'
        );
      }
    );
    this.isAddTeam = false;
  }
  showDelete(data: any):void {
    this.teamID = data.teamID;
    this.isDelete = true;
  }
  okDelete(){
    this.teamService.deleteTeam(this.teamID).subscribe(
      (data: any) => {
        this.fetchTeams();
        this.notification.success(
          'Xóa dự án thành công',
          'Danh sách dự án đã được cập nhật.'
        );
      },
      (error) => {
        this.fetchTeams();
        this.notification.success(
          'Xóa dự án thành công',
          'Danh sách dự án đã được cập nhật.'
        );
      }

    );
    this.isDelete = false;
  }

  showUpdate(){
    this.isUpdate = true;
  }
  getMemberCount(team: any): number {
    return team.members.length;
  }
  loadTeamsAndMembers() {
    this.teamService.getTeams().subscribe(
      (data) => {
        this.teams = data;
      },
      (error) => {
        console.error('Error fetching teams and members:', error);
      }
    );
  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
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

}
