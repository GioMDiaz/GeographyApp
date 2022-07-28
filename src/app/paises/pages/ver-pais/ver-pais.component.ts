import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService : PaisesService
    ) {}


  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisesService.verDetallePais(id)),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais[0])
  }

}
