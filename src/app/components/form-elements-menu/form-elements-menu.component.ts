import { Component, inject } from '@angular/core';
import { FieldTypesService } from 'src/app/services/field-types.service';
import { FieldButtonComponent } from "../field-button/field-button.component";
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-elements-menu',
  imports: [FieldButtonComponent,DragDropModule],
  templateUrl: './form-elements-menu.component.html',
  styleUrl: './form-elements-menu.component.scss'
})
export class FormElementsMenuComponent {

  fieldTypesService = inject (FieldTypesService); 
fieldTypes =this.fieldTypesService.getAllFieldTypes();
noDropAllowed(item : CdkDrag<any>){
return false;
}

}
