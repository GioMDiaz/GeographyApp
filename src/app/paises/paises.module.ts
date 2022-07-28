import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForPaisComponent } from './pages/for-pais/for-pais.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    ForCapitalComponent,
    ForPaisComponent,
    ForRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],

  exports:[
    ForCapitalComponent,
    ForPaisComponent,
    ForRegionComponent,
    VerPaisComponent,
    HttpClientModule
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisesModule { }
