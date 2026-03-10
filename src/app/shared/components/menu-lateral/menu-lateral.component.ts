import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, Inject, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinnerService: NgxSpinnerService,
    private authService: AuthService,
  ) { }

  ngOnDestroy(): void {
  }

  async ngOnInit(): Promise<void> {
   
  }
}
