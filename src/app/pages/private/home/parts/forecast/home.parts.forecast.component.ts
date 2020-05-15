import { Component, OnInit, Input } from '@angular/core';
import { CurrentWeatherDto } from 'src/app/shared/models/current.weather.dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../../store/index';
import { RemoveFromFavorites, addToFavorites } from 'src/store/actions/weather.actions';
import { NguCarouselConfig } from '@stockopedia/carousel';

@Component({
  selector: 'home-parts-forecast-component',
  templateUrl: './home.parts.forecast.component.html',
  styleUrls: ['./home.parts.forecast.component.scss']
})
export class HomePartsForecastComponent implements OnInit {

  @Input() weather: CurrentWeatherDto = null;

  public forecastsCarouselConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 2, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    point: {
      visible: false
    },
    loop: true,
    load: 1,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  constructor(
    private readonly _snackBar: MatSnackBar,
    private readonly store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
  }

  handleFavorites(message: string) {
    if (!this.weather.isFavorite) {
      this.weather.isFavorite = true;
      this.store.dispatch(addToFavorites({ weather: this.weather }));
    } else {
      this.weather.isFavorite = false;
      this.store.dispatch(RemoveFromFavorites({ id: this.weather.id }));
    }
    this._snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

}
