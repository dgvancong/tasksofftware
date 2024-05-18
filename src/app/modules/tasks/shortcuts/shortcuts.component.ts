import { TeamService } from './../../../service/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  standalone: false,
  templateUrl: './shortcuts.component.html',
  styleUrl: './shortcuts.component.scss'
})
export class ShortcutsComponent implements OnInit {
  backlog: any[] = [];
  constructor(
    private teamService: TeamService
  ) { }
  ngOnInit(): void {
    this.fetchBacklog();
  }
  fetchBacklog() {
    this.teamService.getBacklog().subscribe(
      (res: any) => {
        this.backlog = res;
        console.log(this.backlog);
      },
      (error) => {
        console.log(error);

      }
    )
  }
}
