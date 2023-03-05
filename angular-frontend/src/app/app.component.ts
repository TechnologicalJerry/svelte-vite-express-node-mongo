import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-frontend';

  userList: any;

  allUserList: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUserList();
  }

  getAllUserList() {
    console.log('Getting all user list function');

    // this.userService.getUsersList().subscribe({
    //   next: (data: any) => {
    //     this.allUserList = data;
    //     console.log('Getting all user list:', this.allUserList);
    //   },
    //   error: (error: any) => {
    //     console.log('Cannot get User list', error);
    //   }
    // });
  }

}
