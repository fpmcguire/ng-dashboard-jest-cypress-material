import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/placeholder.interface';
import { DataManagerService } from './_data-facade/data-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-dashboard-template';

  public currentUser$: Observable<User> | undefined;

  constructor(private dataManager: DataManagerService) {}

  ngOnInit(): void {
    this.currentUser$ = this.dataManager.currentUser$;
    this.dataManager.initUser();
  }
}
