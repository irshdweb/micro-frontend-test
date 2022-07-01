import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'my-org-nx-welcome',
  template: `
   <div class="container mt-5">
      <my-org-table-wrapper [form]="form" [model]="model" [fields]="fields" 
      (outputFromChild)="receiveChildData($event)">
      </my-org-table-wrapper>
  </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form:any;
  model: any;
  options: any;
  fields = [
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
    {
      key: 'select_multi',
      type: 'select',
      templateOptions: {
        label: 'Select Multiple',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        multiple: true,
        selectAllOption: 'Select All',
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2'  },
          { value: 3, label: 'Option 3'  },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
  ];

  receiveChildData(data:any){
    console.log(data);
  }
}
