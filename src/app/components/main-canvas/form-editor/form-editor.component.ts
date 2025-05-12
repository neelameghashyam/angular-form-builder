import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FieldTypeDefinition, FormField } from 'src/app/models/fields';
import { FormService } from 'src/app/services/form.service';
import { FormFieldComponent } from "../form-field/form-field.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-form-editor',
  standalone: true, 
  imports: [DragDropModule, FormFieldComponent,MatIcon],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {

  formService = inject(FormService);

  onDropInRow(event: CdkDragDrop<string>, rowId :string) {
    if (event.previousContainer.data === 'field-selector') { 
      const fieldType= event.item.data as FieldTypeDefinition; 
      const newField: FormField = { 
      id: crypto.randomUUID(), 
      type: fieldType.type, 
      ...fieldType.defaultConfig
      }
      this.formService.addField(newField, rowId, event.currentIndex); 
      return; 
      }
    const dragData = event.item.data as FormField; 
const previousRowId= event.previousContainer.data as string;

this.formService.moveField(dragData.id, previousRowId, rowId, 
event.currentIndex) 
  }
}