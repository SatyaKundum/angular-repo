import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  user = {
    username : '',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    console.log('suggest username');
    const suggestUserName = 'PnbSuperUser';
    this.loginForm.form.patchValue({
      userLoginData: {
        username: suggestUserName
      }
    });
  }

  onLoginSubmit() {
    console.log(this.loginForm);
    this.user.username = this.loginForm.value.userLoginData.username;
    this.user.password = this.loginForm.value.userLoginData.password;
    this.loginForm.reset();
  }

}
