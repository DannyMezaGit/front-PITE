import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnsRoutingModule } from './alumns.routing';
import { AlumnCreateComponent } from './alumn-create/alumn-create.component';
import { AlumnIndexComponent } from './alumn-index/alumn-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AlumnEditComponent } from './alumn-edit/alumn-edit.component';
import { AlumnSharedService } from './services/alumn-shared.service';


@NgModule({
  declarations: [
    AlumnCreateComponent,
    AlumnIndexComponent,
    AlumnEditComponent
  ],
  imports: [
    CommonModule,
    AlumnsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SimpleNotificationsModule.forRoot(),

  ],
  providers: [AlumnSharedService]
})
export class AlumnsModule { }
