import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/shared/entities';

/**
 * Individual Book Item
 */
@Component({
    selector: 'app-book-item',
    styleUrls: ['book-item.component.scss'],
    templateUrl: 'book-item.component.html'
})
export class BookItemComponent {
    @Input() book: IBook;   // Individual book to display
}
