import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err:string;
  constructor(public _AuthService:AuthService , public _Router:Router) { }
  signinForm:FormGroup = new FormGroup({

    'email':new FormControl(null , [Validators.required , Validators.email]),
    'password':new FormControl(null , Validators.pattern('^[A-Z][a-z0-9]{3,8}$')),

  })


  ngOnInit(): void {
  }


  getFormData(formData)
  {
    
      this._AuthService.signIn(formData.value).subscribe(data =>{

          if(data.message == 'success')
          {
             this._AuthService.saveUserData(data.user , data.token);
             this._Router.navigate(['/home']);
            //console.log(data);
          }
          else
          {
            this.err = 'Email or userName is wrong';
          }
        });
    
  }

}
