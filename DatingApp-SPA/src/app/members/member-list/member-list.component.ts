import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { AttachSession } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  user: User = JSON.parse(localStorage.getItem('user'));
  genderList = [{value: 'Male', display: 'Males'},
                {value: 'Female', display: 'Females'}];

  // classYearList = [{value: 'Freshman', display: 'Freshmen'},
  //                 {value: 'Sophomore', display: 'Sophomores'},
  //                 {value: 'Junior', display: 'Juniors'},
  //                 {value: 'Senior', display: 'Seniors'}];
  // majorList = [{value: 'Accounting', display: 'Accounting'},
  //               {value: 'IT', display: 'IT'},
  //               {value: 'Marketing', display: 'Marketing'},
  //               {value: 'Finance', display: 'Finance'}];

  userParams: any = {};
  pagination: Pagination;

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
    });

    // this.userParams.classYear = this.user.classYear;
    // this.userParams.major = this.user.major;


    this.userParams.gender = this.user.gender === 'Female' ? 'Male' : 'Female';
    this.userParams.maxAge = 99;
    this.userParams.minAge = 18;
    this.userParams.orderBy = 'created';
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  resetFilters() {
    // this.userParams.classYear = this.user.classYear;
    // this.userParams.major = this.user.major;
    this.userParams.gender = this.user.gender === 'Female' ? 'Male' : 'Female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.loadUsers();
  }

  loadUsers() {
    this.userService
      .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
      .subscribe(
        (res: PaginatedResult<User[]>) => {
          this.users = res.result;
          this.pagination = res.pagination;
        },
        error => {
          this.alertify.error(error);
        }
      );
  }
}
