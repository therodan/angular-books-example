import { Component, OnInit } from '@angular/core';

import { IBook } from '../shared/entities';
import { BooksStore } from '../shared/services';
import { Observable } from 'rxjs';

/**
 * Books List Component
 * Display list of books from store
 */
@Component({
    selector: 'app-books-list',
    styleUrls: ['books-list.component.scss'],
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent implements OnInit {
    books$: Observable<IBook[]>;

    constructor(private booksStore: BooksStore) { }

    ngOnInit() {
        // Set books observable
        this.books$ = this.booksStore.books;
    }
}
