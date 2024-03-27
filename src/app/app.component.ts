import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './common/user.service';
import { User } from './common/user.interface';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'registration-app';

  regForm: FormGroup;
  submitted: boolean = false;
  users: User[] = [];


  constructor( private _userService : UserService, private toastr: ToastrService ){

  }
  ngOnInit() {
    this.setFormState();
    this.getUsers();
  }

  setFormState() {
    this.regForm = new FormGroup({
      id : new FormControl(0),
      title: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3)])),
      firstName: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3)])),
      lastName: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3)])),
      email: new FormControl('', Validators.compose([Validators.required,Validators.email])),
      dob: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required,Validators.minLength(6)])),
      confirmPassword: new FormControl('', Validators.compose([Validators.required,Validators.minLength(6)])),
      ecceptTerms : new FormControl(false, Validators.requiredTrue),
    });
  }

  get f() {
    return this.regForm.controls;
  }


  register() {
    this.submitted = true;
    
    // if(this.regForm.invalid) {
    //   alert('need validation');
    // } else {
    //   alert('validation Sucess');
    // }
  }

  resetForm() {
    
    this.submitted = false;
    this.regForm.reset();
  }
  
  getUsers() {
    this._userService.getAllUsers().subscribe((res: User[])  => {
      this.users = res;
      // console.log(this.users)
    });
  }

  edit(Id : number){

  }
  
  delete(Id : number){
    // this._userService.d
  }
}
