import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
@Component({
  selector: 'my-org-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss'],
})
export class TableWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() form: any = new FormGroup({});
  @Input() model:any = {};
  @Input() options:FormlyFormOptions = {};
  @Input() fields:FormlyFieldConfig[] = [];
  @Output() outputFromChild : EventEmitter<string> = new EventEmitter();
  onSubmit(model: any) {
    this.outputFromChild.emit(model);
  }
}
