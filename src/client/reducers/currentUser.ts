import { Reducer, Action } from 'redux';

export interface CurrentUser {
  userName: string;
  image: string;
}

const defaultState: CurrentUser = {
  userName: 'Jos',
  image: ''
};

export const currentUser: Reducer<CurrentUser> = (state = defaultState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
