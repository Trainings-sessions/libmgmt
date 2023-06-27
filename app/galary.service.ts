import { Injectable } from '@angular/core';
import { Book } from './book';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalaryService {

  favBooks:Array<Book>=[];

   private subject= new Subject<any>();



  constructor() { }


  addBook(book:Book)
  {
     this.favBooks.push(book);
     this.subject.next(this.favBooks.length);
  }


 getGalaryCount():Observable<any>
 {
  return this.subject.asObservable();
 }

 getFavBooks():Array<Book>
 {
    return this.favBooks;
 }

}


// EventEmitter
