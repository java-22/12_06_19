import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpProvider {
  private static BASE_URL = 'http://contacts-telran.herokuapp.com';
  constructor(private http: HttpClient){

  }

  registration(email: string, password: string){
    let body = {
      email: email,
      password: password
    };

    let headers: HttpHeaders = new HttpHeaders();
    headers.set("Authorization","token");

    this.http.post(
      HttpProvider.BASE_URL + '/api/registration',
      body,
      {
        // headers:{"Authorization":"token"}
        headers: headers
        // observe:'response'
      }
    ).subscribe((value: AuthResponse) => {
        console.log(value);
        localStorage.setItem('token',value.token);
    },(error:HttpErrorResponse) => {
        console.log(error.error);
    });
  }
}

type AuthResponse = {
  token:string
}
