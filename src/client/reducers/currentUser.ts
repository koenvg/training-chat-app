import { Reducer, Action } from 'redux';
import { guid } from '../../utils/guuid';

export interface CurrentUser {
  id: string;
  userName: string;
  image: string;
}

const defaultState: CurrentUser = {
  id: guid(),
  userName: 'Jos',
  image: ''
};

export const currentUser: Reducer<CurrentUser> = (state = defaultState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
