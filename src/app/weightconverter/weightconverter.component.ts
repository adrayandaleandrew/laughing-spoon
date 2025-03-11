import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weightconverter',
  imports: [FormsModule],
  templateUrl: './weightconverter.component.html',
  styleUrl: './weightconverter.component.scss',
})
export class WeightconverterComponent {

  newWeight = 0;

  inputWeight: string = '';

  onSubmit(event: any) {
    event.preventDefault();
    this.newWeight = (parseFloat (this.inputWeight)) * 2.204; 
    
  }
  
}
