import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-for-pais',
  templateUrl: './for-region.component.html',

})
export class ForRegionComponent {
  termino: string = ''
  hayError: boolean = false;
  regiones: Country[] = []

  constructor(private paisesService: PaisesService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisesService.buscarRegion(termino)
      .subscribe({
        next: (regiones) => {
          console.log(regiones);
          this.regiones = regiones;
        }, error: (err) => {
          this.hayError = true;
          this.regiones = []
        }
      })
  }

  sugerencias(termino: string){
    this.hayError = false;

  }
}

