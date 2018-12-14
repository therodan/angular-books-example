import { Routes } from '@angular/router';

import { PageErrorComponent } from './page-error/page-error.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DefaultLayoutComponent } from './layouts/default/default-layout.component';
import { UnsavedChangesGuard } from './shared/guards';

export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
}, {
    path: '',
    component: DefaultLayoutComponent,
    children: [{
        path: 'books',
        component: BooksListComponent
    }, {
        path: 'new',
        component: AddBookComponent,
        canDeactivate: [UnsavedChangesGuard]
    }]
}, {
    path: '**',
    component: PageErrorComponent
}];
