import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForPaisComponent } from './paises/pages/for-pais/for-pais.component';
import { ForRegionComponent } from './paises/pages/for-region/for-region.component';
import { ForCapitalComponent } from './paises/pages/for-capital/for-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';


const routes: Routes = [
    {
        path: '',
        component: ForPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ForRegionComponent,
    },
    {
        path: 'capital',
        component: ForCapitalComponent,
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AppRoutingModule { } 