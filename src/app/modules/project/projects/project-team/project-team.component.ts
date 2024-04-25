import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/project.service';
import { Project } from '../../../../models/interface/project';

@Component({
  selector: 'app-project-team',
  standalone: false,
  templateUrl: './project-team.component.html',
  styleUrl: './project-team.component.scss'
})
export class ProjectTeamComponent implements OnInit {

  expandSet = new Set<number>();

  constructor(){}

  ngOnInit(): void {

  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  listOfData = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      expand: false,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
  ];


}
