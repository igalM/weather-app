import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesPartsForecastComponent } from './favorites.parts.forecast.component';


describe('FavoritesPartsForecastComponent', () => {
  let component: FavoritesPartsForecastComponent;
  let fixture: ComponentFixture<FavoritesPartsForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesPartsForecastComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPartsForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
