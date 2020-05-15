import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../../store/index';
import { Store } from '@ngrx/store';
import { CurrentWeatherDto } from 'src/app/shared/models/current.weather.dto';
import { getDefaultWeather } from 'src/store/actions/weather.actions';
import { searchCities } from 'src/store/actions/search.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading$: Observable<boolean>;
  public searchQuery$: Observable<string>;
  public currentWeather: CurrentWeatherDto = null;

  constructor(
    private readonly store: Store<fromApp.AppState>
  ) {

    this.searchQuery$ = this.store.select(fromApp.getQuery);
    this.loading$ = this.store.select(fromApp.getLoadingResults);

    this.store.select(fromApp.selectCurrentWeather)
      .subscribe(weather => {
        if (weather) {
          this.currentWeather = weather;
        }
      })
  }

  ngOnInit() {
    this.getDefaultWeather();
  }

  getDefaultWeather() {
    if (!this.currentWeather) {
      this.store.dispatch(getDefaultWeather());
    }
  }

  search(query: string) {
    this.store.dispatch(searchCities({ query: query }));
  }

}
