import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalVars } from 'src/app/shared/vars/global.vars';
import { MatSidenav } from '@angular/material/sidenav';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  public sidenavIndex: number = 1;
  public pointerEvents: string = 'none';

  constructor(
    private readonly gVars: GlobalVars,
    private overlay: OverlayContainer
  ) { }

  ngOnInit(): void {
    document.body.classList.add("light-custom-theme", "mat-app-background");
    this.overlay.getContainerElement().classList.add("light-custom-theme");
  }

  public toggleSidenav() {
    this.sidenav.toggle();
    if (document.body.classList.contains('fixed-body')) {
      document.body.classList.remove('fixed-body');
    } else {
      document.body.classList.add('fixed-body');
    }
  }

  public toggleDegree() {
    this.gVars.isCelsius = !this.gVars.isCelsius;
  }

  public toggleTheme(): void {
    if (this.overlay.getContainerElement().classList.contains("custom-theme")) {
      this.overlay.getContainerElement().classList.remove("custom-theme");
      this.overlay.getContainerElement().classList.add("light-custom-theme");
    } else if (this.overlay.getContainerElement().classList.contains("light-custom-theme")) {
      this.overlay.getContainerElement().classList.remove("light-custom-theme");
      this.overlay.getContainerElement().classList.add("custom-theme");
    } else {
      this.overlay.getContainerElement().classList.add("light-custom-theme");
    }
    if (document.body.classList.contains("custom-theme")) {
      document.body.classList.remove("custom-theme");
      document.body.classList.add("light-custom-theme");
    } else if (document.body.classList.contains("light-custom-theme")) {
      document.body.classList.remove("light-custom-theme");
      document.body.classList.add("custom-theme");
    } else {
      document.body.classList.add("light-custom-theme");
    }
  }

  public sidenavOpened() {
    this.sidenavIndex = 9999;
    this.pointerEvents = 'auto';
  }

  public sidenavClosed() {
    this.sidenavIndex = 1;
    this.pointerEvents = 'none';
    if (document.body.classList.contains('fixed-body')) {
      document.body.classList.remove('fixed-body');
    }
  }

}
