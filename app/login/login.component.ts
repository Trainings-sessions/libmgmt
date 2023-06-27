import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CustomValidationServiceService } from '../custom-validation-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted=false;

  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder,
    private customValidator:CustomValidationServiceService) {
    // this.loginForm = new FormGroup({
    //   username:new FormControl('',Validators.required),
    //   password:new FormControl()
    // });

    this.loginForm = this.formBuilder.group(
      {
        username: ['',Validators.required,Validators.minLength(2)],
        password:['',Validators.compose([Validators.required,this.customValidator.passwordPattenValidator()])]
      }
    )

   }

  ngOnInit(): void {
  }


  get registerFormControl()
  {
    return this.loginForm.controls;
  }

  get username()
  {
    return this.loginForm.controls['username']
  }

  get password()
  {
   return  this.loginForm.controls["password"]
  }

  userLogin()
  {
     this.submitted = true;
     if(this.loginForm.valid)
     {
       
     
    let formData = this.loginForm.getRawValue();
  //  let userName = this.loginForm.get("username");
    //this.form.get("username");
 //   alert(formData.username+"  "+formData.password);
    this.authService.login(formData.username,formData.password).subscribe(()=>{
      if(this.authService.isUserLoggedIn)
      {
            this.router.navigate(['/admin'],{});
      }
    
    }) 
  }   
  }

}
