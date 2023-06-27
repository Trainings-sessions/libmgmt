import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { GalaryService } from '../galary.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit,OnDestroy {

  totalItems:any;
  subscription:Subscription;

  constructor(private galaryService:GalaryService) {

    this.subscription= this.galaryService.getGalaryCount().subscribe(count=>{
      this.totalItems = count;
    })
   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }



}
