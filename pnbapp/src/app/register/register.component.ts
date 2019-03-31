import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registrationForm: NgForm;

  constructor() { }

  ngOnInit() {
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

  onRegisterSubmit(){
    console.log(this.registrationForm);
    
  }


}
