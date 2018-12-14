import { FormControl } from '@angular/forms';

/**
 * Validate a value against a list of values from a string
 * @param array array of values
 */
export function InArray(array: Array<string>) {
    return function(control: FormControl) {
        let valid = true;
        let value: string = null;

        // Get value from control
        value = value ? value : control.value;

        // Check if value in array
        valid = array.indexOf(value) !== -1;

        return valid ? null : { inArray: true };
    };
}
