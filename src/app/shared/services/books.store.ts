import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { BooksService } from './books.service';
import { IBook } from '../entities';

/**
 * BooksStore
 * Observable Store of books
 */
@Injectable()
export class BooksStore {
    private _books: BehaviorSubject<IBook[]> = new BehaviorSubject([]);

    public readonly books: Observable<IBook[]> = this._books.asObservable();

    constructor(private booksService: BooksService) {
        this.loadInitialData();
    }

    /**
     * Load initial data from books service
     */
    loadInitialData() {
        return this.booksService.getBooks().subscribe(books => {
            if (books) {
                this._books.next(books);
            }

            return;
        });
    }

    /**
     * Get list of books from observable
     */
    getBooks(): IBook[] {
        return this._books.getValue();
    }

    /**
     * Add a book to the store
     * Trigger subscribers
     * @param book IBook - book to save to store
     */
    addBook(book: IBook) {
        const booksOp = this.booksService.saveBook(book);

        booksOp.subscribe(() => {
            this._books.getValue().push(book);
            this._books.next(this._books.getValue());
        });

        return booksOp;
    }
}
