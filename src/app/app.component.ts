import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoRootModule } from './transloco-root.module';
import { FormElementsMenuComponent } from "./components/form-elements-menu/form-elements-menu.component";
import { MainCanvasComponent } from "./components/main-canvas/main-canvas.component";
import { FieldSettingsComponent } from "./components/field-settings/field-settings.component";
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-root',
    imports: [DragDropModule, TranslocoRootModule, FormElementsMenuComponent, MainCanvasComponent, FieldSettingsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Starter';
}
