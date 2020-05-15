import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ForecastDto } from '../models/forecast.dto';
import { AutocompleteCity } from '../models/autocomplete.city';
import { CurrentWeatherDto } from '../models/current.weather.dto';
import { GlobalVars } from '../vars/global.vars';

@Injectable()
export class WeatherService {

    public apiKey: string = environment.accuWeather.apiKey;

    constructor(
        private readonly gVars: GlobalVars,
        private readonly http: HttpClient
    ) { }

    public getWeatherForecast(city: AutocompleteCity): Observable<CurrentWeatherDto> {
        return this.http
            .get(`${environment.accuWeather.forecastURL}${city.key}?apikey=${this.apiKey}`)
            .pipe(
                map((res: any) => {
                    const weather: CurrentWeatherDto = {
                        id: city.key,
                        cityName: `${city.name}, ${city.country}`,
                        description: res.Headline.Text,
                        forcasts: [],
                        isFavorite: false
                    }
                    const forecastsArray: ForecastDto[] = [];
                    res.DailyForecasts.forEach(x => {
                        if (x.Day.Icon < 10) {
                            x.Day.Icon = this.minTwoDigits(x.Day.Icon);
                        }
                        let forcast: ForecastDto = {
                            dayName: x.Date,
                            temperatureMin: x.Temperature.Minimum.Value,
                            temperatureMax: x.Temperature.Maximum.Value,
                            dayForcastIcon: `${environment.accuWeather.iconURL}${x.Day.Icon}-s.png`,
                            dayForcastPhrase: x.Day.IconPhrase
                        };
                        forecastsArray.push(forcast);
                    });
                    weather.forcasts = forecastsArray;
                    return weather;
                })
            );
    }

    public searchCities(query: string): Observable<AutocompleteCity[]> {
        return this.http
            .get(`${environment.accuWeather.autocompleteSearchURL}${this.apiKey}&q=${query}`)
            .pipe(
                map((res: any[]) => {
                    const citiesArr: AutocompleteCity[] = [];
                    res.forEach(x => {
                        let city: AutocompleteCity = {
                            key: x.Key,
                            name: x.LocalizedName,
                            country: x.Country.LocalizedName
                        };
                        citiesArr.push(city);
                    });
                    return citiesArr;
                })
            );
    }

    public getGeolocation(): Observable<AutocompleteCity> {
        return this.http
            .get(`${environment.accuWeather.geolocationURL}${this.apiKey}&q=${this.gVars.lat},${this.gVars.lng}`)
            .pipe(
                map((res: any) => {
                    const city: AutocompleteCity = {
                        key: res.Key,
                        name: res.EnglishName,
                        country: res.Country.EnglishName
                    };
                    return city;
                })
            );
    }

    public minTwoDigits(n: number): string {
        return (n < 10 ? '0' : '') + n;
    }

}