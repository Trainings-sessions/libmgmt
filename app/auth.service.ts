import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {delay,tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = false;

  constructor() { }

  login(userName:string,password:string):Observable<boolean>
  {

       if(userName=='admin' && password=='Admin@123')
       {
              return of(true).pipe(
                delay(1000),
                tap(()=>this.isUserLoggedIn=true)
              );
       }

      return of(this.isUserLoggedIn);
  }

  logout()
  {
    this.isUserLoggedIn=false;
  }
}
