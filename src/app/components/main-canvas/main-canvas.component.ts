import { Component, inject, signal } from '@angular/core';
import { FormEditorComponent } from "./form-editor/form-editor.component";
import{MatButtonToggleModule}from"@angular/material/button-toggle"
import { FormPreviewComponent } from "./form-preview/form-preview.component";
import { MatIcon } from '@angular/material/icon';
import { FormService } from 'src/app/services/form.service';
@Component({
  selector: 'app-main-canvas',
  imports: [FormEditorComponent, MatButtonToggleModule, FormPreviewComponent,MatIcon],
  templateUrl: './main-canvas.component.html',
  styleUrl: './main-canvas.component.scss'
})
export class MainCanvasComponent {
activeTab = signal<'preview' | 'editor'>('editor');
formService = inject(FormService)
}
