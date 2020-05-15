import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core.module';
import { RouterModule } from '@angular/router';
import { publicRoutes } from './public.routes';
import { PublicComponent } from './public.component';
import { IndexComponent } from './index/index.component';

const components = [
  PublicComponent,
  IndexComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(publicRoutes)
  ],
  exports: [RouterModule]
})
export class PublicModule { }
