import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  private teamUrl = 'https://taskmasternodejs.vercel.app/team';

  getTeams(): Observable<any> {
    return this.http.get<any>(`${this.teamUrl}`);
  }

  addTeammenber(teammenber: any): Observable<any> {
    return this.http.post<any>(`${this.teamUrl}/add_team_member`, teammenber);
  }

  getProjectTeamID(projectID: any): Observable<any> {
    return this.http.get(`${this.teamUrl}/projectteam/${projectID}`);
  }

}
