import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

  loginUser(login : Login):Observable<any>{

    const options = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post('http://localhost:8080/Levels/login', login, {headers: options} ).pipe(
      tap((data:any)=> {
        //or directly we can assign isLoggedIn to true
        if(data.jwt != null){
          this.isLoggedIn = true;
        }
      }),
      catchError(this.handleError));
  }

  isUserLoggedIn(): boolean{
    return this.isLoggedIn;
  }

  handleError(err: HttpErrorResponse): Observable<any>{
    let errMessage = "";
    if(err.error instanceof Error){
      console.log("error occured", err.error.message);
      errMessage = err.error.message;
      console.log("inside service error");
    }
    else{
      console.log("inside springboot server error");
      if(err.error.errorCode === 600){
      errMessage = err.error.errorMessage;
      console.log("backend error returned", errMessage);

      }
      else{
        errMessage = err.error.errors;
      console.log("backend error returned in else", errMessage);

      }

    }

    return throwError(()=>errMessage);

  }
}
