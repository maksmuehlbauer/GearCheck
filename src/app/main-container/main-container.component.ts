import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    HeaderComponent,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent implements OnInit {

  loggedInUsers: any[] = []

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loggedInUsers = this.usersService.getLoggedInUser();
  }

  logUser() {
    console.log(this.loggedInUsers)
  }
}
