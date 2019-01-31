import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { FloorModel } from '../models/floor.interface';

const API_URL = '../assets/data/floors-data.json';

@Injectable({
  providedIn: 'root'
})
export class LayoutFloorService {

  constructor(private http: HttpClient) { }

  getAllFloorsData(): Observable<FloorModel[]> {
    return this.http.get<FloorModel[]>(API_URL);
  }
}
