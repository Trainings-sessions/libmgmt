import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationServiceService {

  constructor() { }

  userNameValidator(userControl:AbstractControl)
  {
    return new Promise(resolve=>{
      if(userControl.value=='')
        {
          resolve({userNameNotAvailable:true})
        }else
        {
          resolve(null);
        }
    })
  }

  passwordPattenValidator():ValidatorFn{
    return (control:AbstractControl):{[key:string]:any}|null=>{
           if(!control.value)
           {
              return null;
           }

           const regex=new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
           const valid = regex.test(control.value);
           return valid?null:{invalidPassword:true};


    }
  }
}
