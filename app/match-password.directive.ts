import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Directive,Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator , FormGroup} from '@angular/forms';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{
    provide : NG_VALIDATORS,
    useExisting: MatchPasswordDirective,
    multi: true,
  }]
})
export class MatchPasswordDirective implements Validator {

   @Input("appMatchPassword") matchPassword:Array<string> =[];


  constructor() { }
  validate(formGroup: FormGroup): ValidationErrors | null {
   
    return this.passwordMatch(this.matchPassword[0],this.matchPassword[1])(formGroup);
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

  private passwordMatch(controlName:string,checkControlName:string)
  {
    return (formGroup :FormGroup)=>{
          const password = formGroup.controls[controlName];
          const confirmPassword = formGroup.controls[checkControlName];
          if(confirmPassword?.errors && !confirmPassword.errors['matching'])
          {
            return null;

          
          }


          if(password?.value !== confirmPassword?.value)
          {
            confirmPassword?.setErrors({matching:true});
            return {matching:true};
          }else
          {
            confirmPassword?.setErrors(null)
            return null;
          }
    }
  }

}
