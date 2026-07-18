import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculo-iess',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculo-iess.component.html',
  styleUrls: ['./calculo-iess.component.css']
})
export class CalculoIessComponent {
  sueldo: number | null = null;
  tipoAfiliacion: string = 'privado';
  aportePersonal: number | null = null;
  sueldoNeto: number | null = null;

  calcular() {
    if (!this.sueldo || this.sueldo <= 0) return;

    // Tasa 2026: Privado 9.45% | Público 11.45%
    const tasa = this.tipoAfiliacion === 'privado' ? 0.0945 : 0.1145;
    this.aportePersonal = parseFloat((this.sueldo * tasa).toFixed(2));
    this.sueldoNeto = parseFloat((this.sueldo - this.aportePersonal).toFixed(2));
  }
}