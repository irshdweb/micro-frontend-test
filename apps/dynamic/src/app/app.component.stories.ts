import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule} from '@ngx-formly/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TableWrapperComponent } from 'libs/wrapper/src/lib/table-wrapper/table-wrapper.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FormlyFieldInput } from 'libs/wrapper/src/lib/table-wrapper/controlls/formly-field-input';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FormlyFieldRadio } from 'libs/wrapper/src/lib/table-wrapper/controlls/formly-field-radio';
import { AppComponent } from './app.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FormlyFieldSelect } from 'libs/wrapper/src/lib/table-wrapper/controlls/formly-field-select';



export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableWrapperComponent, FormlyFieldInput, FormlyFieldRadio, FormlyFieldSelect],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            { name: 'input', component: FormlyFieldInput },
            { name: 'radio', component: FormlyFieldRadio },
            { name: 'select', component: FormlyFieldSelect }
          ],
        }),
      ],
    })
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  fields: [
    {
      key: 'Radio',
      type: 'radio',
      templateOptions: {
        name: 'gender',
        options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'Select',
      type: 'select',
      templateOptions: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2'  },
          { value: 3, label: 'Option 3'  },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
  ]
}
