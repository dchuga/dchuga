import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculo-imc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.css']
})
export class CalculoImcComponent {
  peso: number | null = null;
  altura: number | null = null; // En centímetros
  imc: number | null = null;
  categoria: string = '';

  calcular() {
    if (!this.peso || !this.altura) return;
    
    const alturaMetros = this.altura / 100;
    this.imc = parseFloat((this.peso / (alturaMetros * alturaMetros)).toFixed(2));

    if (this.imc < 18.5) this.categoria = 'Bajo peso';
    else if (this.imc < 25) this.categoria = 'Peso normal';
    else if (this.imc < 30) this.categoria = 'Sobrepeso';
    else this.categoria = 'Obesidad';
  }
}