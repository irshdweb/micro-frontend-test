import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
 // eslint-disable-next-line @angular-eslint/component-selector
 selector: 'formly-field-input',
 template: `
 <div class="form-group">
   <label>{{to.label}}</label>
   <input class="form-control" [type]="type" [formControl]="formControl" [formlyAttributes]="field" [placeholder]="to.placeholder">
</div>
 `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldInput extends FieldType<FieldTypeConfig> {
  get type() {
    return this.to.type || 'text';
  }
}