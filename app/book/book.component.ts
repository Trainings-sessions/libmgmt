import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import {MatTableDataSource} from '@angular/material/table'
import { GalaryService } from '../galary.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BookService } from '../book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  // private bookList:Array<Book>= [new Book(1,"It ends wth us ",350,"Priyanka",'',"assets/image1.jpg"),
  // new Book(2,"Say Less and Ask More",1900,"Michael Bungay",'This book givs you seven question and tools to make them an everydy way to work less hard and have ore impact',"assets/image2.jpg") ];
  
  private bookList:Array<Book>=[];
  hposition:MatSnackBarHorizontalPosition = 'center';
  vposition:MatSnackBarVerticalPosition ='top';

  displayedColumns:string[]=['icon','ISDN','name','author','price','action'];
  datasource!: MatTableDataSource<Book>;


  constructor(private galaryService:GalaryService, private infoSnackBar:MatSnackBar,private bookService:BookService) {
    // bookService.getAllBook().subscribe(response=>{
    //   this.bookList = response;
    // })
    // this.datasource= new MatTableDataSource(this.bookList);
  
   }

  ngOnInit(): void {
   // this.bookList = this.bookService.getAllBook();
   this.bookService.getAllBook().pipe(
    retry(3),
    catchError(this.handleError))
   .subscribe(response=>{
   
    this.bookList = response;
    this.datasource= new MatTableDataSource(this.bookList);
  })
    
   
  }

  addBook(icon:string,ISDN:number,name:string,author:string,price:number)
  {
     this.galaryService.addBook(new Book(ISDN,name,price,author,"",icon));
     this.infoSnackBar.open('Book Added successfully','',{
      horizontalPosition:'center',
      verticalPosition:'top'
     });
  }


  private handleError(error:HttpErrorResponse){
    if(error.status===0)
      console.error("An error occurred : "+error.error);
    else
      console.error(`Backend returned code ${error.status} with response as ${error.error}`);

      return throwError(()=>{new Error("Something bad happened ,Please try again or connect with Admin")});

  }
  

}
