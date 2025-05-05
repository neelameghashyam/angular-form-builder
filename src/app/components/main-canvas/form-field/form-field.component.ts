import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button'
import { FormField } from 'src/app/models/fields';
import { FieldTypesService } from 'src/app/services/field-types.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-field',
  imports: [NgComponentOutlet,MatIconModule,TitleCasePipe],
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

fieldTypesService= inject(FieldTypesService); 
previewComponent = computed(() => {
const type = this.fieldTypesService.getFieldType(this.field().type); 
return type?.component ?? null;
}
)
}
