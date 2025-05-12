import { Component, inject } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { FieldPreviewComponent } from "../field-preview/field-preview.component";

@Component({
  selector: 'app-form-preview',
  imports: [FieldPreviewComponent],
  templateUrl: './form-preview.component.html',
  styleUrl: './form-preview.component.scss'
})
export class FormPreviewComponent {
formService = inject(FormService)
}
