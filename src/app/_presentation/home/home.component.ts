import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../../_data-facade/data-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dataManager: DataManagerService) {}

  ngOnInit(): void {
    console.log('HomeComponent');
  }
}
