import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUserService } from './login-user.service';
import { Login } from './login';
import { Router } from '@angular/router';

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


  constructor(private formBuilder: FormBuilder, private loginService: LoginUserService, private router: Router){ }

  ngOnInit(){
    this.loginForm = this.formBuilder.group(
      {
        username : [this.login.username, Validators.required],
        password : [this.login.password, Validators.required]
      }
    )
  }

  handleLogin()
  {
    console.log("login functionality called");
    this.login.username = this.loginForm.value.username;
    this.login.password = this.loginForm.value.password;

    this.loginService.loginUser(this.login).subscribe({
      next: data => {
        this.response = data;
        this.router.navigate(['/homepage']);
      },
      error: error =>{ 
        this.errorMessage = error;
        console.log("inside login component error:", this.errorMessage)
      },
      complete:(()=>console.log("subscription completed"))
    })
  }

}
