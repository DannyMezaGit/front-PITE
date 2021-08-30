import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { ApiAlumnService } from '../services/api-alumn.service';

@Component({
  selector: 'app-alumn-create',
  templateUrl: './alumn-create.component.html',
  styleUrls: ['./alumn-create.component.css']
})
export class AlumnCreateComponent implements OnInit {

  alumnForm: FormGroup | any;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _notifications: NotificationsService,
    private _apiAlumnService: ApiAlumnService,
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

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.alumnForm.invalid) {
      this._notifications.create('Error', 'Llenar todos los campos', NotificationType.Error, { theClass: 'error', timeOut: 4000, showProgressBar: false });

      return;

    }


    this._apiAlumnService.addAlumn(this.alumnForm.value).subscribe(res => {

      this._notifications.create('Success', 'Alumno creado con éxito', NotificationType.Error, { theClass: 'error', timeOut: 4000, showProgressBar: false });
      this._router.navigate(['alumns']);

    }, (error) => {
      this._notifications.create('Error', error.message, NotificationType.Error, { theClass: 'error', timeOut: 4000, showProgressBar: false });

    });


  }

}
