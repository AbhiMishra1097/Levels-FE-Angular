import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import { Login } from '../utilityClasses/login';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http: HttpClient) { }

  loginUser(login : Login):Observable<any>{

    const options = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post('http://localhost:8080/Levels/login', login, {headers: options} ).pipe(
      tap((data:any)=> console.log("data received from login service from springboot: ",data)),
      catchError(this.handleError));
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
