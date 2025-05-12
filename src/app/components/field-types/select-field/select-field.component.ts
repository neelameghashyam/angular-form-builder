import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormField } from 'src/app/models/fields';

@Component({
  selector: 'app-select-field',
  imports: [MatFormFieldModule, MatSelectModule], 
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'], 
})
export class SelectFieldComponent {
  field = input.required<FormField>();
}