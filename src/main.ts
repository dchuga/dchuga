import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // Corregida la ruta y el nombre del componente

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));