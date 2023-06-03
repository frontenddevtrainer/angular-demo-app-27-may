import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginFormState = { email: "hello", password: "123456" };

  changeData(){
    console.log("changeData");  
  }

}
