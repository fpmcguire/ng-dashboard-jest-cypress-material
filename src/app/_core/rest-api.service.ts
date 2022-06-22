import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError, BehaviorSubject, map } from 'rxjs';
import { Users, User } from '../../interfaces/placeholder.interface';
import { UrlConstants } from './constants/url-constants.constants';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  getUser(indx: number): Observable<User> {
    let url: string = UrlConstants.USERS_URL + '/' + (indx + 1);
    console.log(`getUsers() ${url}`);

    return this.http.get<User>(url).pipe(
      retry(3),
      map((user: User) => {
        console.log(`get() ${user}`);
        return user;
      }),
      catchError(this.handleError),
    );
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';

    if (error.error instanceof ErrorEvent) {
      msg = error.error.message; // client side error
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`; // server side error
    }
    console.log(msg);
    return throwError(() => msg);
  }
}
