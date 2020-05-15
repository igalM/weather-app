import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { GlobalVars } from 'src/app/shared/vars/global.vars';

@Component({
  selector: 'public-component',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(
    private readonly gVars: GlobalVars,
    private overlay: OverlayContainer
  ) {

  }

  ngOnInit(): void {
    document.body.classList.add("light-custom-theme", "mat-app-background");
    this.overlay.getContainerElement().classList.add("light-custom-theme");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.gVars.lat = position.coords.latitude;
        this.gVars.lng = position.coords.longitude;
      });
    }
  }

}
