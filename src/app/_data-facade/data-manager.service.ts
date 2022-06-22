import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from '../../interfaces/placeholder.interface';
import { RestApiService } from '../_core/rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  constructor(private restApi: RestApiService) {}

  private currentUser!: User;
  private currentUserSubject = new BehaviorSubject<User>(this.currentUser);
  public currentUser$ = this.currentUserSubject.asObservable();

  public initUser(): Subscription {
    return this.restApi
      .getUser(0)
      .pipe()
      .subscribe({
        next: (data: User) => {
          this.currentUser = <User>data;
          this.currentUserSubject.next(this.currentUser);
        },
        error: error => this.apiErrorHandler(error),
        complete: () => {
          console.log('USER_COMPLETE');
        },
      });
  }

  private apiErrorHandler(error: Error): void {
    console.log(error.message);
  }
}
