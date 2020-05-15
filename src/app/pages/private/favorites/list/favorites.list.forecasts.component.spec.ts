import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesListForecastsComponent } from './favorites.list.forecasts.component';


describe('FavoritesListForecastsComponent', () => {
  let component: FavoritesListForecastsComponent;
  let fixture: ComponentFixture<FavoritesListForecastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesListForecastsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesListForecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
