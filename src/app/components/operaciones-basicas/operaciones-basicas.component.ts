import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operaciones-basicas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operaciones-basicas.component.html',
  styleUrls: ['./operaciones-basicas.component.css']
})
export class OperacionesBasicasComponent {
  num1: number | null = null;
  num2: number | null = null;
  operacion: string = '+';
  resultado: number | null = null;
  error: string = '';

  calcular() {
    this.error = '';
    this.resultado = null;

    if (this.num1 === null || this.num2 === null) {
      this.error = 'Por favor, llene ambas cajas de texto.';
      return;
    }

    switch (this.operacion) {
      case '+': this.resultado = this.num1 + this.num2; break;
      case '-': this.resultado = this.num1 - this.num2; break;
      case '*': this.resultado = this.num1 * this.num2; break;
      case '/': 
        if (this.num2 === 0) {
          this.error = 'Error: No se puede dividir para cero.';
        } else {
          this.resultado = this.num1 / this.num2;
        }
        break;
    }
  }
}