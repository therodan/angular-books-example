import { Observable } from 'rxjs';

/**
 * Check whether component has unsaved changes
 */
export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}
