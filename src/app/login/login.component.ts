import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../auth/login.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup;
  constructor(private logSer: LoginService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup= new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  
    });
  }
  loginProces(){
    if(this.formGroup.valid){
      this.logSer.login(this.formGroup.value).subscribe(
          result =>{
            alert(result);
            // var decoded = jwt_decode(response.token);
            // console.log(response);
            // if(result.success){
            //   // console.log(result);
            //   console.log(result);
            // }else{
            //   alert(result.message);
            // }
          }, error => console.log(error)
      )
    }
  }
  // onLogin(value): void {
  //   // console.log(value);
  //   this.logSer.login(value)
  //     .subscribe(
  //       res => console.log(res),
  //       err => console.log(err)
  //     );
  // }

}
