import { Component, input } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormField } from 'src/app/models/fields';

@Component({
  selector: 'app-text-field',
  imports: [MatFormField,MatInputModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  field= input.required<FormField>();
}
