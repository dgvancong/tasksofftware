import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  private teamUrl = 'https://taskmasternodejs.vercel.app/team';

  private apiUrl = 'http://localhost:3000/team';

  getTeams(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getTeamsAndMembers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/team-menber`);
  }

  addTeammenber(teammenber: any): Observable<any> {
    return this.http.post<any>(`${this.teamUrl}/add_team_member`, teammenber);
  }

  getProjectTeamID(projectID: any): Observable<any> {
    return this.http.get(`${this.teamUrl}/projectteam/${projectID}`);
  }

}
