import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of, asyncScheduler } from 'rxjs';
import { debounceTime, switchMap, map, catchError } from 'rxjs/operators';
import { AutocompleteCity } from 'src/app/shared/models/autocomplete.city';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { SearchActions } from '../actions/actions';

@Injectable()
export class SearchEffects {

    search$ = createEffect(
        () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
            this.actions$.pipe(
                ofType(SearchActions.searchCities),
                debounceTime(debounce, scheduler),
                switchMap(({ query }) => this.weatherService.searchCities(query).pipe(
                    map((cities: AutocompleteCity[]) => SearchActions.searchCitiesSuccess({ cities: cities })),
                    catchError(() => of(SearchActions.searchCitiesFailure({ cities: [] }))))
                )
            )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly weatherService: WeatherService
    ) { }
}