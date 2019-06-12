import { Component, OnInit } from '@angular/core';
import {HttpProvider} from '../http.provider';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email = '';
  password = '';
  result = '';
  constructor(private httpProvider: HttpProvider) { }

  ngOnInit() {
  }

  registration():void{
    this.httpProvider.registration(this.email,this.password);
  }

}
