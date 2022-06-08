import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formId        : any = 'add_user';
  form!         : FormGroup;
  paramId       : any;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute)
  { }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params['id'];
    this.formInfo();

    if (this.paramId) {
      this.getParamDataForEdit();
    }
  }

  submitForEdit() {
    this.userService.updateData(this.form.value).subscribe((res:any)=>{
      if (res['isExecuted']) {
        alert(res['message']);
        this.router.navigateByUrl('/user/view');
      }
      else {
        alert(res['message']);
      }
    })
  };

  getParamDataForEdit() {
    this.userService.getDataForEdit(this.paramId).subscribe((res:any)=>{
      if (res['isExecuted']) {
        this.form.patchValue(res['data']);
      }
      else {
        alert(res['message']);
      }
    })
  }

  formInfo(){
    this.form = this.fb.group({
      id          : [],
      first_name   : ['', Validators.required],
      last_name : ['', Validators.required],
      address :   [''],
      father_name   : [''],
      mother_name : ['']
    });
  }

  addUser(){
    this.userService.addUser(this.form.value).subscribe((getData:any) => {
      if (getData['isExecuted'] == true) {
        alert(getData['message']);
      }
      else
      {
        alert(getData['message']);
      }
    })
  };

  onButtonClick() {
    if (this.form.valid) {
      if (this.paramId) {
        //if edit
        confirm('Do you want to update data?');
        this.submitForEdit();
      } else {
        //if Add
        confirm('Do you want to save data?');
        this.addUser();
      }

    } else {
      alert('Please fill the required fields!');
    }
  }


}
