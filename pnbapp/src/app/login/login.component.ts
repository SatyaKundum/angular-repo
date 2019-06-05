import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PnbSignInUser } from '../pnb-user';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  errorMessage: String;
  responseMessage: String;
  user = {
    username : '',
    password : ''
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  pnbsigninuser = new PnbSignInUser('','');

  onLoginSubmit() {
    console.log(this.loginForm);
    this.user.username = this.loginForm.value.userLoginData.username;
    this.user.password = this.loginForm.value.userLoginData.password;
    this.pnbsigninuser = new PnbSignInUser(this.user.username, this.user.password);
    this.apiService.signInUser(this.pnbsigninuser).subscribe(response => {
      this.responseMessage = response;
    }, error => this.errorMessage = <any> error);
    this.loginForm.reset();
  }

}
