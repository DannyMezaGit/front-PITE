import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnCreateComponent } from './alumn-create/alumn-create.component';
import { AlumnEditComponent } from './alumn-edit/alumn-edit.component';
import { AlumnIndexComponent } from './alumn-index/alumn-index.component';

const routes: Routes = [
  { path: '', component: AlumnIndexComponent },
  { path: 'new', component: AlumnCreateComponent },
  { path: 'edit/:id', component: AlumnEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnsRoutingModule { }
