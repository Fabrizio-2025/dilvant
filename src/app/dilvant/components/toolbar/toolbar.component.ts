import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})


export class ToolbarComponent {
dropdownOptions: string[] = ['Reserva', 'Pública'];
selectedOption: string = '';

  onOptionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    console.log('Opción seleccionada:', value);
    this.selectedOption = value;
  }

}
