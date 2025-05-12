import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormField } from 'src/app/models/fields';
import { FormService } from 'src/app/services/form.service';
import { FieldPreviewComponent } from "../field-preview/field-preview.component";

@Component({
  selector: 'app-form-field',
  imports: [ MatIconModule, TitleCasePipe, FieldPreviewComponent],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {

  formService = inject(FormService)
deleteField(e:Event) {

e.stopPropagation();
this.formService.deleteField(this.field().id)

}
field= input.required<FormField>();

}
