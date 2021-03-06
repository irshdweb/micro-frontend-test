import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
 // eslint-disable-next-line @angular-eslint/component-selector
 selector: 'formly-field-radio',
 template: `
 <div class="form-group">
  <div *ngFor="let option of to.options">
    <input type="radio" 
           [name]="to.name"
           [formControl]="formControl" [formlyAttributes]="field" 
           [value]="option.key">
    {{ option.value }}
  </div>
</div>
 `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldRadio extends FieldType<FieldTypeConfig> {
    override to!:any;
}