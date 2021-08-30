import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { Alumn } from '../alumn.model';
import { AlumnSharedService } from '../services/alumn-shared.service';
import { ApiAlumnService } from '../services/api-alumn.service';

@Component({
  selector: 'app-alumn-edit',
  templateUrl: './alumn-edit.component.html',
  styleUrls: ['./alumn-edit.component.css']
})
export class AlumnEditComponent implements OnInit, OnDestroy {

  alumnForm: FormGroup;
  subscription$!: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _apiAlumnService: ApiAlumnService,
    private _alumnSharedService: AlumnSharedService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _notifications: NotificationsService,

  ) {
    this.alumnForm = this._fb.group({

      alumnId: [0],
      name: ['', { validators: [Validators.required] }],
      age: [null, { validators: [Validators.required] }],
      birthday: ['', { validators: [Validators.required] }],
      remarks: [''],
      isActive: [true],

    })
   }
  ngOnDestroy(): void {
    if (this.subscription$ !== null) {
      this.subscription$.unsubscribe()
    }
  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe((params: Params) => {
      this.getAlumnById(params.id);
    })

    this.subscription$ = this._alumnSharedService.getAlumn$.subscribe(res => {
      this.alumnForm.patchValue(res);
    });

  }
  getAlumnById(id: number) {
    this._apiAlumnService.getAlumnById(id).subscribe(res => {
      this.updateSharedState(res.data);
    });

  }

  updateSharedState(newState: Alumn) {
    this._alumnSharedService.setNewAlumn = newState;
  }

  onSubmit() {
    if (this.alumnForm.invalid) {
      this._notifications.create('Error', 'Llenar todos los campos', NotificationType.Error, { theClass: 'error', timeOut: 4000, showProgressBar: false });

      return;
    }

    this._apiAlumnService.updateAlumn(this.alumnForm.value).subscribe(res => {

      this._notifications.create('Success', 'Alumno creado con éxito', NotificationType.Success, { theClass: 'success', timeOut: 4000, showProgressBar: false });
      this._router.navigate(['alumns']);

    }, (error) => {
      this._notifications.create('Error', error.message, NotificationType.Error, { theClass: 'error', timeOut: 4000, showProgressBar: false });

    });
  }
}
