import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../interfaces/placeholder.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  public currentUser!: User | null;

  constructor() {}

  ngOnInit(): void {
    console.log(HeaderComponent);
  }
}
