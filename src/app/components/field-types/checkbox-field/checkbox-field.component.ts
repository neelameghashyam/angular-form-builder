import { Component, input } from '@angular/core';
import { FormField } from 'src/app/models/fields';
import {MatCheckboxModule}from '@angular/material/checkbox'

@Component({
  selector: 'app-checkbox-field',
  imports: [MatCheckboxModule],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss'
})
export class CheckboxFieldComponent {
  field= input.required<FormField>();

}
