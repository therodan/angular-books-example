import { Component, OnInit } from '@angular/core';
import { NAVBAR_ROUTES } from './navbar.routes';

/**
 * Navbar Component
 * Display menubar at top
 */
@Component({
    selector: 'app-nav-bar',
    styleUrls: ['navbar.component.scss'],
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    menuItems = NAVBAR_ROUTES;  // List of routes

    constructor() { }

    ngOnInit() { }
}
