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
  ];

  receiveChildData(data:string){
    console.log(data);
  }
}
