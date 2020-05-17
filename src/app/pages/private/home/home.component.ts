import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../../../store/index';
import { Store, select } from '@ngrx/store';
import { CurrentWeatherDto } from 'src/app/shared/models/current.weather.dto';
import { getDefaultWeather } from 'src/store/actions/weather.actions';
import { searchCities } from 'src/store/actions/search.actions';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public loading$: Observable<boolean>;
  public searchQuery$: Observable<string>;
  public currentWeather: CurrentWeatherDto = null;
  private unsubscribe = new Subject();

  constructor(
    private readonly store: Store<fromApp.AppState>
  ) {

    this.searchQuery$ = this.store.select(fromApp.getQuery);
    this.loading$ = this.store.select(fromApp.getLoadingResults);

    this.store.pipe(
      select(fromApp.selectCurrentWeather),
      filter(data => !!data),
      takeUntil(this.unsubscribe)
    )
      .subscribe(weather => {
        debugger;
        this.currentWeather = weather
      })
  }

  ngOnInit() {
    this.getDefaultWeather();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
