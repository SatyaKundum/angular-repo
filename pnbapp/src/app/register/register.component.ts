import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { PnbUser } from '../pnb-user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'registration module';
  @ViewChild('f') registrationForm: NgForm;
  errorMessage: String;
  responseMessage: String;

  constructor(private apiService: ApiService) { }

  user = {
    username: '',
    email: '',
    password: ''
  };
  submitted = false;

  ngOnInit() {
    this.onRegisterUser;
  }

  suggestUserName() {
    console.log('suggest username');
    const suggestUserName = 'PnbSuperUser';
    this.registrationForm.form.patchValue({
      userRegisterData: {
        username: suggestUserName
      }
    });
  }

  pnbuser = new PnbUser('','','');

  onRegisterUser() {
    this.user.username = this.registrationForm.value.userRegisterData.username;
    this.user.password = this.registrationForm.value.userRegisterData.password;
    this.user.email = this.registrationForm.value.userRegisterData.email;
    this.pnbuser = new PnbUser(this.user.username, this.user.password, this.user.password);
    this.apiService.createUser(this.pnbuser).subscribe(response => {
      this.responseMessage = response;
    }, error => this.errorMessage = <any> error);
    this.registrationForm.reset();
  }
}
