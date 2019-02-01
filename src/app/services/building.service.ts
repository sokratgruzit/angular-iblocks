import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { BuildingModel } from '../models/building.interface';

const API_URL = '../../assets/data/building-data.json';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private http: HttpClient) { }

  getAllBuildingData(): Observable<BuildingModel[]> {
    return this.http.get<BuildingModel[]>(API_URL);
  }

  getBuildingById(id): Observable<BuildingModel> {
    return this.http.get<BuildingModel>(API_URL + `/${id}`);
  }
}
