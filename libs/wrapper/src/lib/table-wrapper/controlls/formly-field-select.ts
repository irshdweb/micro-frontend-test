import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
 // eslint-disable-next-line @angular-eslint/component-selector
 selector: 'formly-field-select',
 template: `
 <div class="form-group">
    <select class="form-control" [formControl]="formControl" [formlyAttributes]="field" >
        <option *ngFor="let option of to.options" [value]="option.value">{{option.label}}</option>
    </select>
</div>
 `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldSelect extends FieldType<FieldTypeConfig> {
    override to!:any;
}