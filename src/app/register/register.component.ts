import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err:string;
  constructor(public _AuthService:AuthService , public _Router:Router) { }
  registerForm:FormGroup = new FormGroup({

    'first_name':new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)] ),
    'last_name':new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    'age':new FormControl(null , [Validators.required , Validators.min(16) , Validators.max(60)]),
    'email':new FormControl(null , [Validators.required , Validators.email]),
    'password':new FormControl(null , Validators.pattern('^[A-Z][a-z0-9]{3,8}$')),

  })
  
  ngOnInit(): void {
  }

  getFormData(formData)
  {
    if(formData.valid == true)
    {
      this._AuthService.signUp(formData.value).subscribe(data =>
        {
          if(data.message == 'success')
          {
            this._Router.navigate(['/signin']);
          }
          else
          {
            this.err = 'mail is already registered';
          }
        });
    //console.log(formData.value);
    }
  }
}
