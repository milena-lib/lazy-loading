import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesStatComponent } from './movies-stat/movies-stat.component';

@NgModule({
  declarations: [MoviesComponent, MoviesDetailsComponent, MoviesStatComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
