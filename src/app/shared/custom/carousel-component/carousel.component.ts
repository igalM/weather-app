import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ForecastDto } from '../../models/forecast.dto';

@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items: ForecastDto[] = [];
  @Input() config: NguCarouselConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
