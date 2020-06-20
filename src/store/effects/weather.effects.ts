import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { WeatherActions } from '../actions/actions';
import { of } from 'rxjs';

@Injectable()
export class WeatherEffects {

    addWeatherForecast$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WeatherActions.addWeatherForecast),
            switchMap(({ city }) => this.weatherService.getWeatherForecast(city).pipe(
                map(weather => WeatherActions.addWeatherForecastSuccess({ currentWeather: weather })),
                catchError(() => of(WeatherActions.addWeatherForecastFailure()))
            )
            )
        )
    );

    getDefaultWeather$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WeatherActions.getDefaultWeather),
            switchMap(() => this.weatherService.getGeolocation().pipe(
                map(city => WeatherActions.addWeatherForecast({ city: city })),
                catchError(() => of(WeatherActions.addWeatherForecastFailure()))
            )
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly weatherService: WeatherService
    ) { }
}