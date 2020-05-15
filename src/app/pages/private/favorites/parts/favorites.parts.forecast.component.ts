import { Component, OnInit, Input } from '@angular/core';
import { CurrentWeatherDto } from 'src/app/shared/models/current.weather.dto';
import * as fromApp from '../../../../../store/index';
import { Store } from '@ngrx/store';
import { viewWeather } from 'src/store/actions/weather.actions';

@Component({
  selector: 'favorites-parts-forecast-component',
  templateUrl: './favorites.parts.forecast.component.html',
  styleUrls: ['./favorites.parts.forecast.component.scss']
})
export class FavoritesPartsForecastComponent implements OnInit {
  @Input() favoriteWeather: CurrentWeatherDto = null;
  constructor(
    private readonly store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
  }

  viewLocation() {
    this.store.dispatch(viewWeather({ id: this.favoriteWeather.id }));
  }

}
