import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Array<Book>|any=[];

  constructor(private http:HttpClient) { }

  addNewBook(book:Book)
  {
    this.books.push(book);
  }

  // getBookById(id:number):Book|undefined
  // {
  //   let results = this.books.filter(book=>{book.ISDN==id});
  //   if(results.length!=0)
  //      return results[0];

  //      return undefined;
  // }

  getAllBook():Observable<Array<Book>>
  {
        
        const url:string = "assets/product.json";
        console.log("fetching product data from : {}",url);
       //  return this.http.get<Book[]>(url)
        return this.http.get<Array<Book>>(url);
        
  }

  
}
