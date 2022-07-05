import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
 // eslint-disable-next-line @angular-eslint/component-selector
 selector: 'formly-field-input',
 template: `
   <input type="input" [formControl]="formControl" [formlyAttributes]="field">
 `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldInput extends FieldType<FieldTypeConfig> {}