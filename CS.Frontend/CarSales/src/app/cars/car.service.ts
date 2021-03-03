import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ICar } from './car';

@Injectable({
    providedIn:'root'
})
export class CarService {
  private carUrl = 'http://localhost:65390/api/car';

  constructor(private http:HttpClient) {}
  
    getCars(): Observable<ICar[]> {
        return this.http.get<ICar[]>(this.carUrl).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    postCar(car: ICar): Observable<ICar> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return this.http.post<ICar>(this.carUrl , car, httpOptions).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );  
    } 


    private handleError(err: HttpErrorResponse) {
      //in a real world app, we may send the server to some remote logging infrastracture
    //instead of just loggin it to the console
  
    let errorMessage = '';
  
    if(err.error instanceof ErrorEvent) {
      // A client-side or network error occureed. Handle it accordinglhy
      errorMessage = `An error occured:${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response mode.
      //The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}



