import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../../../store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentWeatherDto } from 'src/app/shared/models/current.weather.dto';

@Component({
  selector: 'favorites-list-forecasts-component',
  templateUrl: './favorites.list.forecasts.component.html',
  styleUrls: ['./favorites.list.forecasts.component.scss']
})
export class FavoritesListForecastsComponent implements OnInit {

  public favoriteWeathers$: Observable<CurrentWeatherDto[]>;

  constructor(
    private readonly store: Store<fromApp.AppState>
  ) {
    this.favoriteWeathers$ = this.store.select(fromApp.selectFavoriteWeathers);
  }

  ngOnInit(): void {
  }

}
