import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-for-pais',
  templateUrl: './for-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]

})
export class ForPaisComponent {
  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = []
  paisesSugeridos: Country[] = []

  constructor(private paisesService: PaisesService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisesService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          console.log(paises);
          this.paises = paises;
        }, error: (err) => {
          this.hayError = true;
          this.paises = []
        }
      })
  }

  sugerencias(termino: string){
    this.hayError = false;

    this.paisesService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5))
  }
}
