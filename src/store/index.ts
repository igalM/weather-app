import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWeather from './reducers/weather.reducer';
import * as fromSearch from './reducers/search.reducer';

export interface AppState {
    weathers: fromWeather.State;
    search: fromSearch.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    weathers: fromWeather.weatherReducer,
    search: fromSearch.searchReducer
}

export const selectWeatherState = createFeatureSelector<fromWeather.State>('weathers');

export const selectCurrentWeather = createSelector(
    selectWeatherState,
    state => state.currentWeather
);

export const selectFavoriteWeathers = createSelector(
    selectWeatherState,
    state => state.favorites
);

export const selectSearchState = createFeatureSelector<fromSearch.State>('search');

export const selectAutocompleteCities = createSelector(
    selectSearchState,
    state => state.autocompleteCities
);

export const getLoadingResults = createSelector(
    selectSearchState,
    state => state.loading
);

export const getQuery = createSelector(
    selectSearchState,
    state => state.query
);