import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumn } from '../alumn.model';
import { AlumnSharedService } from '../services/alumn-shared.service';
import { ApiAlumnService } from '../services/api-alumn.service';

@Component({
  selector: 'app-alumn-index',
  templateUrl: './alumn-index.component.html',
  styleUrls: ['./alumn-index.component.css']
})
export class AlumnIndexComponent implements OnInit {

  alumnsList$!: Observable<Alumn[]>;

  constructor(
    private _alumnSharedService: AlumnSharedService,
    private _apiAlumnService: ApiAlumnService
  ) { }

  ngOnInit(): void {
    this.alumnsList$ = this._alumnSharedService.getAlumnsList$;

    this.getAllAllumns();

  }
  getAllAllumns() {
    this._apiAlumnService.getAllAlumns().subscribe(x => {
      console.log(x)
      this._alumnSharedService.setAlumnsList = x.data;
    })
  }

  onEdit() {

  }

  onDelete(alumnId: number) {
    this._apiAlumnService.deleteAlumn(alumnId).subscribe(x => {
      this.getAllAllumns();
    });


  }

}
