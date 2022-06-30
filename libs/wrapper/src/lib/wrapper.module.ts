import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableWrapperComponent } from './table-wrapper/table-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  exports: [
    TableWrapperComponent
  ],
  declarations: [TableWrapperComponent],
})
export class WrapperModule {}
