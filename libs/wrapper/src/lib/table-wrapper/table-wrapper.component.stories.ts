import { FormGroup } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TableWrapperComponent } from './table-wrapper.component';

export default {
  title: 'TableWrapperComponent',
  component: TableWrapperComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TableWrapperComponent>;

const Template: Story<TableWrapperComponent> = (args: TableWrapperComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    form:  new FormGroup({}),
    model:  {},
    options:  {},
    fields:  [],
}