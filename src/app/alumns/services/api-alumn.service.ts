import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response.model';
import { environment } from 'src/environments/environment';
import { Alumn } from '../alumn.model';

@Injectable({
  providedIn: 'root'
})

export class ApiAlumnService {

  private _apiURL = environment.apiUrl + '/Alumn';

  constructor(private _http: HttpClient) { }

  getAllAlumns(): Observable<ApiResponse<Alumn[]>> {
    return this._http.get<ApiResponse<Alumn[]>>(this._apiURL);
  }

  getAlumnById(alumnId: number): Observable<ApiResponse<Alumn>> {
    return this._http.get<ApiResponse<Alumn>>(`${this._apiURL}/${alumnId}`);
  }

  addAlumn(alumn: Alumn): Observable<ApiResponse<Alumn>> {
    return this._http.post<ApiResponse<Alumn>>(this._apiURL, alumn);
  }

  updateAlumn(alumn: Alumn): Observable<ApiResponse<Alumn>> {
    return this._http.put<ApiResponse<Alumn>>(this._apiURL, alumn);
  }

  deleteAlumn(id: number): Observable<ApiResponse<Alumn>> {
    return this._http.delete<ApiResponse<Alumn>>(`${this._apiURL}/${id}`)
  }

}
