import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ComponentCanDeactivate } from '../shared/contracts';
import { BooksStore } from '../shared/services';
import { CATEGORIES } from '../shared/entities';
import { InArray } from '../shared/validators/in_array.validator';

/**
 * Add Books Component
 * Allow user to add a new book to the store
 */
@Component({
    selector: 'app-add-book',
    styleUrls: ['add-book.component.scss'],
    templateUrl: 'add-book.component.html'
})
export class AddBookComponent implements OnInit, ComponentCanDeactivate {
    bookForm: FormGroup;
    categories = CATEGORIES;    // List of categories for selecting from
    message: string = null;     // Success message

    constructor(private formBuilder: FormBuilder, private booksStore: BooksStore) {
    }

    ngOnInit() {
        // Build the form
        this.bookForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(30)]],
            category: [null, [Validators.required, InArray(this.categories)]],
            description: ['', [Validators.required]]
        });
        // Monitor for changes to title to clear the success message
        this.bookForm.get('title').valueChanges.subscribe(() => {
            this.message = null;
        });
    }

    /**
     * Save new book
     */
    saveBook() {
        // Check if form valid
        if (this.bookForm.valid) {
            this.message = null;    // Clear previous messages

            // Add book to store
            this.booksStore.addBook(this.bookForm.value).subscribe(() => {
                // Clear values
                this.bookForm.setValue({
                    title: '',
                    category: null,
                    description: ''
                });
                // Mark Untouched
                this.bookForm.markAsPristine();
                this.bookForm.markAsUntouched();

                this.message = 'Book Saved!';
            });
        }
    }

    /**
     * Can leave component
     */
    canDeactivate() {
        // Check if there are changes made to the form
        return !this.bookForm.dirty;
    }
}
