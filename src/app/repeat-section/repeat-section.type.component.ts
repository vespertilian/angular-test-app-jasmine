import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-repeat-section-type',
  templateUrl: './repeat-section.type.component.html',
  styleUrls: ['./repeat-section.type.component.scss']
})
export class RepeatSectionFormlyComponent extends FieldArrayType {}
