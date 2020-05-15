import { createAction, props } from '@ngrx/store';
import { CurrentWeatherDto } from 'src/app/shared/models/current.weather.dto';
import { AutocompleteCity } from 'src/app/shared/models/autocomplete.city';

export const addWeatherForecast = createAction(
    '[Weather] Add Weather Forecast',
    props<{ city: AutocompleteCity }>()
);

export const addWeatherForecastSuccess = createAction(
    '[Weather] Add Weather Forecast Success',
    props<{ currentWeather: CurrentWeatherDto }>()
);

export const addWeatherForecastFailure = createAction('[Weather] Add Weather Forecast Failure');

export const getDefaultWeather = createAction('[Weather] Get Default Weather');

export const viewWeather = createAction(
    '[Weather] View Weather',
    props<{ id: string }>()
);

export const addToFavorites = createAction(
    '[Weather] Add To Favorites',
    props<{ weather: CurrentWeatherDto }>()
);

export const RemoveFromFavorites = createAction(
    '[Weather] Remove From Favorites',
    props<{ id: string }>()
);

