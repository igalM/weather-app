import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as fromApp from '../../../../store/index';
import { Store } from '@ngrx/store';
import { AutocompleteCity } from 'src/app/shared/models/autocomplete.city';
import { addWeatherForecast } from 'src/store/actions/weather.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public regex = new RegExp('^[a-zA-Z ]+$');
  public showError: boolean = false;

  @Input() query: string = ''
  @Input() searching: boolean = false;
  @Output() search = new EventEmitter<string>();

  public filteredCities: AutocompleteCity[] = [];

  constructor(
    private readonly store: Store<fromApp.AppState>,
    private readonly _snackBar: MatSnackBar
  ) {
    this.store.select(fromApp.selectAutocompleteCities)
      .subscribe(cities => {
        this.filteredCities = cities;
        return this.filteredCities;
      });
  }

  ngOnInit(): void {
  }

  checkIfValid(query: string) {
    query = query.trim();
    if (query !== '') {
      if (this.regex.test(query)) {
        this.query = query;
        this.showError = false;
        this.search.emit(query);
      } else {
        this.showError = true;
      }
    }
  }

  submit() {
    const selectedCity = this.filteredCities.find(x => x.name == this.query);
    this.query = '';
    if (!selectedCity) {
      const message = 'Oops! Looks like there is no city that matches that name, please try again.';
      this._snackBar.open(message, 'Close', {
        duration: 5000,
      });
    }
    this.store.dispatch(addWeatherForecast({ city: selectedCity }));
  }

}
