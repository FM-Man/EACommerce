import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup;
  newuser = new User();

  constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      userid: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  postdata(angForm1: { value: { name: any; userid: any; email: any; phone: any; password: any; }; }) {
   // this.userservice.userregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password);
      this.newuser.name = angForm1.value.name;
      this.newuser.userid = angForm1.value.userid;
      this.newuser.email = angForm1.value.email;
      this.newuser.password = angForm1.value.password;
      this.newuser.phone = angForm1.value.phone;

      this.userservice.userregistration(this.newuser).subscribe(
        (res: any) => {
          // console.log('hello')
          console.log(res);
          this.router.navigate(['login']);
        }, (err: any) => {
          console.log('error');
        }
      );
    }

    toLogin(){
      this.router.navigate(['login']);
    }
}
