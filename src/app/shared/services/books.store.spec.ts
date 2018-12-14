import { BooksStore } from './books.store';
import { of } from 'rxjs';

describe('BooksStore', () => {
    let store: BooksStore;
    let mockBookService;

    describe('AddBook function', () => {
        beforeEach(() => {
            mockBookService = jasmine.createSpyObj(['getBooks', 'saveBook']);
        });

        it('should add a book to the store', async () => {
            mockBookService.getBooks.and.returnValue(of([]));
            mockBookService.saveBook.and.returnValue(of([]));
            store = new BooksStore(mockBookService);

            store.addBook({
                title: 'Test Book',
                category: 'Drama',
                description: 'Test description'
            }).subscribe();

            expect(store.getBooks().length).toBe(1);
        });
    });
});
