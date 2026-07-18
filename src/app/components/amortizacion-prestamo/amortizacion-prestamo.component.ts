import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amortizacion-prestamo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './amortizacion-prestamo.component.html',
  styleUrls: ['./amortizacion-prestamo.component.css']
})
export class AmortizacionPrestamoComponent {
  monto: number | null = null;
  interesAnual: number | null = null;
  plazoMeses: number | null = null;
  cuotaMensual: number | null = null;

  calcular() {
    if (!this.monto || !this.interesAnual || !this.plazoMeses) return;

    const tasaMensual = (this.interesAnual / 100) / 12;
    const cuota = this.monto * (tasaMensual * Math.pow(1 + tasaMensual, this.plazoMeses)) / (Math.pow(1 + tasaMensual, this.plazoMeses) - 1);
    this.cuotaMensual = parseFloat(cuota.toFixed(2));
  }
}