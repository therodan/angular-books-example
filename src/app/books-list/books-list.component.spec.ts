import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { BooksStore, BooksService } from '../shared/services';
import { BooksListComponent } from './books-list.component';
import { BookItemComponent } from './book-item/book-item.component';

describe('BooksListComponent', () => {
    let booksStore: BooksStore;
    let mockBookService;
    let fixture: ComponentFixture<BooksListComponent>;

    beforeEach(() => {
        mockBookService = jasmine.createSpyObj(['getBooks', 'saveBook']);
        mockBookService.getBooks.and.returnValue(of([]));
        booksStore = new BooksStore(mockBookService);

        TestBed.configureTestingModule({
            declarations: [
                BooksListComponent,
                BookItemComponent
            ],
            providers: [
              { provide: BooksStore, useValue: booksStore }
            ],
            schemas: [NO_ERRORS_SCHEMA]
          });
          fixture = TestBed.createComponent(BooksListComponent);
    });

    it('should automatically update the list of books when a book is added to the store', () => {
        mockBookService.saveBook.and.returnValue(of([]));

        booksStore.addBook({
            title: 'Test',
            category: 'Comedy',
            description: 'Test description'
        }).subscribe(() => {
            fixture.detectChanges();
            const heroComponentDEs = fixture.debugElement.queryAll(By.directive(BookItemComponent));
            expect(heroComponentDEs.length).toEqual(1);
        });

    });
});
