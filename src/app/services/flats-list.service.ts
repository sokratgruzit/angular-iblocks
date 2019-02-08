import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { FlatModel } from '../models/flat.interface';

const API_URL = '../assets/data/flats-data.json';

@Injectable({
  providedIn: 'root'
})
export class FlatsListService {

  constructor(private http: HttpClient) { }

  getAllFlatsData(): Observable<FlatModel[]> {
    return this.http.get<FlatModel[]>(API_URL);
  }
}
