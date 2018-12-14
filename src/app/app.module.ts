import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.router';
import { UnsavedChangesGuard } from './shared/guards';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { DefaultLayoutModule } from './layouts/default/default-layout.module';
import { MaterialModule } from './material.module';
import { BooksStore, BooksService } from './shared/services';
import { BookItemComponent } from './books-list/book-item/book-item.component';

@NgModule({
    declarations: [
        BooksListComponent,
        BookItemComponent,
        AddBookComponent,
        PageErrorComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes),
        MaterialModule,
        DefaultLayoutModule
    ],
    providers: [
        UnsavedChangesGuard,
        BooksStore,
        BooksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
