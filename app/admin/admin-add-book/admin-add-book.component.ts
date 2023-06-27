import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.scss']
})
export class AdminAddBookComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
