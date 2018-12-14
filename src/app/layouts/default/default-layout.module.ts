import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';

/**
 * Default Layout Component
 * All Layout components
 */
@NgModule({
    exports: [
        DefaultLayoutComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MaterialModule
    ],
    declarations: [
        DefaultLayoutComponent,
        NavbarComponent
    ]
})
export class DefaultLayoutModule { }
