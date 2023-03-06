import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUserService } from '../services/login-user.service';
import { Login } from '../utilityClasses/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm !: FormGroup;

  login : Login = new Login();

  response!:any;
  errorMessage !: string;


  constructor(private formBuilder: FormBuilder, private loginService: LoginUserService){ }

  ngOnInit(){
    this.loginForm = this.formBuilder.group(
      {
        username : ['', Validators.required],
        password : ['', Validators.required]
      }
    )
  }

  handleLogin()
  {
    console.log("login functionality called");
    this.loginService.loginUser(this.login).subscribe({
      next: data => this.response = data,
      error: error => this.errorMessage = error,
      complete:(()=>console.log("subscription completed"))
    })
  }

}
