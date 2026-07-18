import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesBasicasComponent } from './components/operaciones-basicas/operaciones-basicas.component';
import { CalculoImcComponent } from './components/calculo-imc/calculo-imc.component';
import { CalculoIessComponent } from './components/calculo-iess/calculo-iess.component';
import { AmortizacionPrestamoComponent } from './components/amortizacion-prestamo/amortizacion-prestamo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    OperacionesBasicasComponent,
    CalculoImcComponent,
    CalculoIessComponent,
    AmortizacionPrestamoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vistaActiva: string = 'dashboard';

  cambiarVista(vista: string) {
    this.vistaActiva = vista;
  }
}