# Books Example

An example books application that allows a user to add a book to a list of books.

This example is built using Angular 6 with Angular Material for presentation and SCSS styling (with additional Bootstrap styling).

It uses the notion of a global store that contains the list of books. As books are added to the store, all components subscribed to it are notified that a new book has been added.

## Development server

Run `npm start` for a dev server and then navigate to `http://localhost:4200/` in your browser.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Production Builds

Run `npm run build:prod` to build the app for production use.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
