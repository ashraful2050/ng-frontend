import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userData : any = [];

  constructor(private userService: UserService,
              private router: Router)
  { }

  ngOnInit(): void {
    this.viewUserData();
  }

  onEdit(userId : number) {
    this.router.navigate(['/user/add', { id: userId }]);
  };

  onDelete(userId: number) {
    confirm('Are you want to delete?');
    this.userService.deleteuser(userId).subscribe((res:any)=>{
      if (res['isExecuted']) {
        alert(res['message']);
        this.ngOnInit();
      }
      else {
        alert(res['message']);
      }
    })
  };

  viewUserData() {
    this.userService.viewUser().subscribe((res:any)=>{
      if (res['isExecuted']) {
        this.userData = res['data'];
      }
      else {
        alert('Error');
      }
    })
  }

}
