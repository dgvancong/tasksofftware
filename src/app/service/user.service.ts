import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'https://taskmasternodejs.vercel.app/user';

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.userUrl}/register/`, user);
  }

  login(user: { emailAddress: string; password: string }) {
    return this.http.post<any>(`${this.userUrl}/login`, user).pipe(
      tap((response) => {
        if (response.success && response.token && response.userID) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userID', response.userID);
        }
      })
    );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.userUrl}`);
  }

  getUserInfo(userID:any): Observable<any> {
    return this.http.get<any>(`${this.userUrl}/userLogin/${userID}`);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
  }

}
