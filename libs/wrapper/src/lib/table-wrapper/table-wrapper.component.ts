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

  @Input() form = new FormGroup({});
  @Input() model = {};
  @Input() options:FormlyFormOptions = {};
  @Input() fields:FormlyFieldConfig[] = [];
  @Output() outputFromChild : EventEmitter<any> = new EventEmitter();
  onSubmit(model:object) {
    this.outputFromChild.emit(model);
  }
}
