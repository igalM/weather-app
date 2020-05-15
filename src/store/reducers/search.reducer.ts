import { AutocompleteCity } from 'src/app/shared/models/autocomplete.city';
import { createReducer, on, Action } from '@ngrx/store';
import { SearchActions } from '../actions/actions';


export interface State {
    autocompleteCities: AutocompleteCity[];
    loading: boolean;
    query: string;
}

const initialState: State = {
    autocompleteCities: [],
    loading: false,
    query: ''
};

const _searchReducer = createReducer(
    initialState,
    on(
        SearchActions.searchCities, (state, { query }) => {
            if (query === '') {
                return {
                    ...state,
                    autocompleteCities: [],
                    loading: false,
                    query: query
                }
            }

            return {
                ...state,
                loading: true,
                query: query
            }
        }),
    on(
        SearchActions.searchCitiesSuccess,
        SearchActions.searchCitiesFailure,
        (state, { cities }) => ({
            ...state,
            loading: false,
            autocompleteCities: cities
        }))
)

export function searchReducer(state: State | undefined, action: Action) {
    return _searchReducer(state, action)
}