import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AddBookComponent } from './add-book.component';
import { BooksStore } from '../shared/services';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AddBookComponent', () => {
    let booksStore: BooksStore;
    let mockBookService;
    let fixture: ComponentFixture<AddBookComponent>;

    beforeEach(() => {
        mockBookService = jasmine.createSpyObj(['getBooks', 'saveBook']);
        mockBookService.getBooks.and.returnValue(of([]));
        booksStore = new BooksStore(mockBookService);

        TestBed.configureTestingModule({
            declarations: [
                AddBookComponent
            ],
            providers: [
                FormBuilder,
                { provide: BooksStore, useValue: booksStore }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(AddBookComponent);
    });

    it('should save a book to the BookStorage when the book is saved', () => {
        mockBookService.saveBook.and.returnValue(of([]));
        fixture.detectChanges();
        fixture.componentInstance.bookForm.setValue({
            title: 'Test',
            category: 'Sport',
            description: 'Test description'
        });

        fixture.componentInstance.saveBook();

        expect(booksStore.getBooks().length).toBe(1);
    });

    it('should clear the form after a book has been saved', () => {
        mockBookService.saveBook.and.returnValue(of([]));
        fixture.detectChanges();
        fixture.componentInstance.bookForm.setValue({
            title: 'Test',
            category: 'Sport',
            description: 'Test description'
        });

        fixture.componentInstance.saveBook();

        const value = fixture.componentInstance.bookForm.value;

        expect(value.title).toBe('');
        expect(value.category).toBe(null);
        expect(value.description).toBe('');
    });

    it('should display a success message after saving', () => {
        mockBookService.saveBook.and.returnValue(of([]));
        fixture.detectChanges();
        fixture.componentInstance.bookForm.setValue({
            title: 'Test',
            category: 'Sport',
            description: 'Test description'
        });

        fixture.componentInstance.saveBook();
        fixture.detectChanges();

        expect(fixture.componentInstance.message).toBe('Book Saved!');
        expect(fixture.debugElement.queryAll(By.css('.alert')).length).toBe(1);
    });
});
