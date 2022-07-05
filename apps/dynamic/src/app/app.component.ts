import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  
  form!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/ban-types
  model!: {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  options!: {};
  fields = [
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
        placeholder: 'Enter email address',
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
  ];

  receiveChildData(data:string){
    console.log(data);
  }
}
