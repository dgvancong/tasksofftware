import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../../service/team.service';
import { TeamData } from '../../../../models/interface/team';

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
  isDelete = false;
  isUpdate = false

  constructor(private teamService: TeamService){}

  ngOnInit(): void {
    this.loadTeamsAndMembers();
  }
  showDelete(){
    this.isDelete = true;
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

}
