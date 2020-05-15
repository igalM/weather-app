import { createReducer, on, Action } from '@ngrx/store';
import { CurrentWeatherDto } from 'src/app/shared/models/current.weather.dto';
import { WeatherActions } from '../actions/actions';

export interface State {
    weathers: CurrentWeatherDto[];
    favorites: CurrentWeatherDto[];
    currentWeather: CurrentWeatherDto;
}

const initialState: State = {
    weathers: [],
    favorites: [],
    currentWeather: null,
}

const _weatherReducer = createReducer(
    initialState,
    on(
        WeatherActions.addWeatherForecastSuccess, (state, { currentWeather }) => ({
            ...state,
            currentWeather: currentWeather,
            weathers: [...state.weathers, currentWeather]
        })),
    on(
        WeatherActions.addWeatherForecastFailure, (state) => ({
            ...state,
            currentWeather: state.currentWeather
        })),
    on(
        WeatherActions.addToFavorites, (state, { weather }) => ({
            ...state,
            favorites: [...state.favorites, weather]
        }
        )),
    on(
        WeatherActions.RemoveFromFavorites, (state, { id }) => ({
            ...state,
            favorites: state.favorites.filter(x => x.id !== id)
        }
        )),
    on(
        WeatherActions.viewWeather, (state, { id }) => ({
            ...state,
            currentWeather: state.weathers.find(x => x.id === id)
        }
        ))
)

export function weatherReducer(state: State | undefined, action: Action) {
    return _weatherReducer(state, action)
}