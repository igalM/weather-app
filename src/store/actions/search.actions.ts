import { createAction, props } from '@ngrx/store';
import { AutocompleteCity } from 'src/app/shared/models/autocomplete.city';

export const searchCities = createAction(
    '[Cities] Search Cities',
    props<{ query: string }>()
);

export const searchCitiesSuccess = createAction(
    '[Cities] Search Cities Success',
    props<{ cities: AutocompleteCity[] }>()
);

export const searchCitiesFailure = createAction(
    '[Cities] Search Cities Failure',
    props<{ cities: AutocompleteCity[] }>()
);
