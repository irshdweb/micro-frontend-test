import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableWrapperComponent } from './table-wrapper/table-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInput } from './table-wrapper/controlls/formly-field-input';
import { FormlyFieldRadio } from './table-wrapper/controlls/formly-field-radio';
import { FormlyFieldSelect } from './table-wrapper/controlls/formly-field-select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FormlyFieldInput},
        { name: 'radio', component: FormlyFieldRadio },
        { name: 'select', component: FormlyFieldSelect }
      ],
    }),
  ],
  exports: [
    TableWrapperComponent,
    FormlyFieldInput, FormlyFieldRadio
  ],
  declarations: [TableWrapperComponent, FormlyFieldInput, FormlyFieldRadio, FormlyFieldSelect],
})
export class WrapperModule {}
