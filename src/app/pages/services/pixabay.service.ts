import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { Hit } from '../interfaces/pixabay-response';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private baseUrl = environment.baseUrl;
  private params = new HttpParams().append('key', '13119377-fc7e10c6305a7de49da6ecb25');

  constructor( private http: HttpClient ) { }

  getImages(): Observable<Hit[]> {
    return this.http.get(this.baseUrl, { params: this.params })
      .pipe(
        pluck('hits')
      );
  }
  
  getImageById(id: number): Observable<Hit[]> {
    return this.http.get(`${ this.baseUrl }?id=${ id }`, { params: this.params })
      .pipe(
        pluck('hits')
      );
  }
  
  getImagesByQuery(query: string): Observable<Hit[] | any> {
    return this.http.get(`${ this.baseUrl }?q=${ query }`, { params: this.params })
      .pipe(
        pluck('hits'),
        catchError( err => of([]))
      );
  }
  
  getImagesByCategory(category: string): Observable<Hit[] | any> {
    return this.http.get(`${ this.baseUrl }?category=${ category }`, { params: this.params })
      .pipe(
        pluck('hits'),
        catchError( err => of([]))
      );
  }
}
