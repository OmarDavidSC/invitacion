import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Loginloaded: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
  }

}