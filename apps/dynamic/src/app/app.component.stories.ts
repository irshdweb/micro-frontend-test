import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule} from '@ngx-formly/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TableWrapperComponent } from 'libs/wrapper/src/lib/table-wrapper/table-wrapper.component';
import { AppComponent } from './app.component';



export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableWrapperComponent, AppComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
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
      key: 'gender',
      type: 'radio',
      templateOptions: {
        name: 'gender',
        options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }, { value: 'None', key: 'N' }]
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
    }
  ]
}
