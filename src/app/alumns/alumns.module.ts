import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnsRoutingModule } from './alumns.routing';
import { AlumnCreateComponent } from './alumn-create/alumn-create.component';
import { AlumnIndexComponent } from './alumn-index/alumn-index.component';


@NgModule({
  declarations: [
    AlumnCreateComponent,
    AlumnIndexComponent
  ],
  imports: [
    CommonModule,
    AlumnsRoutingModule
  ]
})
export class AlumnsModule { }
