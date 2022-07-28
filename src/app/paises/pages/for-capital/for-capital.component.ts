import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-for-pais',
  templateUrl: './for-capital.component.html',

})
export class ForCapitalComponent {
  termino: string = ''
  hayError: boolean = false;
  capitales: Country[] = []

  constructor(private paisesService: PaisesService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisesService.buscarCapital(termino)
      .subscribe({
        next: (capitales) => {
          console.log(capitales);
          this.capitales = capitales;
        }, error: (err) => {
          this.hayError = true;
          this.capitales = []
        }
      })
  }

  sugerencias(termino: string){
    this.hayError = false;

  }
}
