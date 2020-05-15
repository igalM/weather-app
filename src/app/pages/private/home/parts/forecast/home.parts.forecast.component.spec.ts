import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartsForecastComponent } from './home.parts.forecast.component';

describe('HomePartsForecastComponent', () => {
  let component: HomePartsForecastComponent;
  let fixture: ComponentFixture<HomePartsForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePartsForecastComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePartsForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
