import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentCanDeactivate } from '../contracts/';

/**
 * Check for unsaved changes and prompt to continue
 */
@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
    constructor() {
    }

    canDeactivate(
        component: ComponentCanDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (component.canDeactivate()) {
            return true;
        }
        else {
            const confirm = window.confirm('You have unsaved unchanges. Are you sure you wish to continue?');

            return confirm;
        }
    }
}
