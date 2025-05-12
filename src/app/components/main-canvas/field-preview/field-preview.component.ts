import { NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { FormField } from 'src/app/models/fields';
import { FieldTypesService } from 'src/app/services/field-types.service';

@Component({
  selector: 'app-field-preview',
  imports: [NgComponentOutlet],
  templateUrl: './field-preview.component.html',
  styleUrl: './field-preview.component.scss'
})
export class FieldPreviewComponent {
field=input.required<FormField>(); 
fieldTypesService= inject (FieldTypesService);

previewComponent= computed(() => { 
const type = this.fieldTypesService.getFieldType(this.field().type); 
return type?.component ?? null; 
});

}
