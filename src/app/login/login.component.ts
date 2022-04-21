import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  newuser = new User();

  constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) {
    this.angForm = this.fb.group({
      password: ['', Validators.required],
      userid: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  postdata(angForm1: { value: { userid:any; password: any; }; }) {
      this.newuser.userid = angForm1.value.userid;
      this.newuser.password = angForm1.value.password;

      this.userservice.userlogin(this.newuser).subscribe(
        (res: any) => {
          // console.log('logged in successfully: ' + res);
          console.log(res);
          this.userservice.currentuser = res;
          this.router.navigate(['home']);
        }, (err: any) => {
          console.log('error');
        }
      );
      // this.router.navigate(['login']);
    }

  toRegister(){
    this.router.navigate(['signup']);
  }

}
