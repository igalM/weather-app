import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesListForecastsComponent } from './favorites/list/favorites.list.forecasts.component';
import { PrivateComponent } from './private.component';

export const privateRoutes: Routes = [
    {
        path: '', component: PrivateComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'favorites', component: FavoritesListForecastsComponent }
        ]
    }
];