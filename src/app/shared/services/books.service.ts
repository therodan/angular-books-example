import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IBook } from '../entities';

/**
 * Books Service
 * Simulate Backend by saving to localstorage
 */
@Injectable()
export class BooksService {
    constructor() {}

    /**
     * Get a list of books from localstorage or empty array
     */
    getBooks(): Observable<IBook[]> {
        try {
            const booksJSON = window.localStorage.getItem('books');
            if (!booksJSON) {
                return of([]);
            }

            const books: IBook[] = JSON.parse(booksJSON);

            return of(books);
        }
        catch (e) {
            console.error(e);

            return of([]);
        }
    }

    /**
     * Save a new book to localstorage
     * @param book IBook - new book to save
     */
    saveBook(book: IBook) {
        return this.getBooks().pipe(
            tap(books => {
                books.push(book);

                window.localStorage.setItem('books', JSON.stringify(books));
            })
        );
    }
}
