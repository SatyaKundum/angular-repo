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

  @ViewChild('f') registrationForm: NgForm;

  constructor(private apiService: ApiService) { }

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

  pnbuser: {
    "username": "test11",
    "email": "test11@gmail.com",
    "password": "skdjflsajflsaf"
  }

  onRegisterUser() {
    this.apiService.createUser(this.pnbuser).subscribe((response) => {
      console.log(response);
    });
  }
}
