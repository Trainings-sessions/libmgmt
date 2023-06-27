import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-regiteration',
  templateUrl: './user-regiteration.component.html',
  styleUrls: ['./user-regiteration.component.scss']
})
export class UserRegiterationComponent implements OnInit {

  regForm = {
    name:'',
    userName:'',
    password:'',
    confirmPassword:'',
    acceptTerms:false
  };
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit()
  {
    alert(JSON.stringify(this.regForm));
  }

}
