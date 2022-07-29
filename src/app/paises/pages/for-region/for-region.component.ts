import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-for-pais',
  templateUrl: './for-region.component.html',
  styles: [`
  button{
    margin-right: 5px
  }
  `]

})
export class ForRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false

  ngOnInit(): void { }


  constructor(private paisesService: PaisesService) { }

  activarRegion(region: string) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisesService.buscarRegion(region)
      .subscribe(paises => { this.paises = paises })
  }


  conditionalClass(region: string) {
    return (this.regionActiva === region) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }




}