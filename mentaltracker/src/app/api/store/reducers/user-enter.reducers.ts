import { createReducer, on } from '@ngrx/store';
import { enter, quit } from '../actions/user-enter.actions';

export const initialState = { firstLoad: false, quit: true };

const _userEnterReducer = createReducer(
  initialState,
  on(enter, (state) => state = { firstLoad: true, quit: false }),
  on(quit, (state) => state = { firstLoad: false, quit: true }),
);

export function userEnterReducer(state, action) {
  return _userEnterReducer(state, action);
}
