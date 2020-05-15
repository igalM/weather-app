import { ForecastDto } from './forecast.dto';

export class CurrentWeatherDto {
    id: string;
    cityName: string;
    description: string;
    forcasts: ForecastDto[];
    isFavorite: boolean;
}