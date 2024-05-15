import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  userDetails: any = {};
  userID : any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.getUserDetails();
  }
  getUserDetails() {
    this.route.params.subscribe((params) => {
    this.userID = +params['id'];
    this.userService.getUserDetails(this.userID).subscribe(
      (data: any) => {
        this.userDetails = data;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  });
  }
}
