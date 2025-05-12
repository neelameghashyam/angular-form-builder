import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { OptionItem } from 'src/app/models/fields';

@Component({
  selector: 'app-dynamic-options',
  imports: [MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './dynamic-options.component.html',
  styleUrl: './dynamic-options.component.scss'
})
export class DynamicOptionsComponent {

title = input(''); 
options = input.required<OptionItem []>(); 
optionsChange= output<OptionItem[]>();

addOption() { 
const currentOptions = this.options(); 
const newOptions = [...currentOptions]; 
newOptions.push({ 
label: 'Option ${newOptions.length + 1}', 
value: 'option-${newOptions.length + 1}' 
});
}

updateOption(index: number, newLabel: string) { 
const currentOptions = this.options(); 
const newOptions = [...currentOptions]; 
newOptions[index] = { ...newOptions[index], 
label: newLabel, 
}
this.optionsChange.emit(newOptions);
}

removeOption (index: number) { 
const currentOptions = this.options(); 
const newOptions = [...currentOptions]; 
newOptions.splice(index, 1); 
this.optionsChange.emit(newOptions); 
}

}
