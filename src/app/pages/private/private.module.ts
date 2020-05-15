import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core.module';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HomePartsForecastComponent } from './home/parts/forecast/home.parts.forecast.component';
import { FavoritesPartsForecastComponent } from './favorites/parts/favorites.parts.forecast.component';
import { FavoritesListForecastsComponent } from './favorites/list/favorites.list.forecasts.component';
import { privateRoutes } from './private.routes';
import { PrivateComponent } from './private.component';

const components = [
  PrivateComponent,
  HomeComponent,
  FavoritesListForecastsComponent,
  NavMenuComponent,
  HomePartsForecastComponent,
  FavoritesPartsForecastComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(privateRoutes),
  ],
  exports: [RouterModule]
})
export class PrivateModule { }
