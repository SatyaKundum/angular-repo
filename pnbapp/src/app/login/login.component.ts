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

  onLoginSubmit() {
    console.log(this.loginForm);
    this.user.username = this.loginForm.value.userLoginData.username;
    this.user.password = this.loginForm.value.userLoginData.password;
    this.loginForm.reset();
  }

}
