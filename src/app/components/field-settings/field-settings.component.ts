import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FieldTypesService } from 'src/app/services/field-types.service';
import { FormService } from 'src/app/services/form.service';
import{MatSelectModule} from '@angular/material/select'
import { MatCheckbox } from '@angular/material/checkbox';
import { DynamicOptionsComponent } from "./dynamic-options/dynamic-options.component";

@Component({
  selector: 'app-field-settings',
  imports: [MatFormFieldModule, MatInput, FormsModule, MatSelectModule, MatCheckbox, DynamicOptionsComponent],
  templateUrl: './field-settings.component.html',
  styleUrl: './field-settings.component.scss'
})
export class FieldSettingsComponent {
formService=inject(FormService)

fieldTypesService =inject (FieldTypesService); 
fieldSettings = computed(() => { 
const field = this.formService.selectedField(); 
if (!field) return []; 
const fieldDef = this.fieldTypesService.getFieldType(field.type); 
return fieldDef?.settingsConfig || []; 
});

fieldValues = computed(() => { 
const field = this.formService.selectedField(); 
if (!field) return {}; 
return field as any;
})

updateField(fieldId: string, key: string, value: any) { 
this.formService.updateField (fieldId, { [key]: value }); 
}

}
