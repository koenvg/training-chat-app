import { Reducer, Action } from 'redux';
import { guid } from '../../utils/guid';
import { selectRandomElementFromArray } from '../../utils/random';

const names = ['Jos', 'Jef', 'Homer', 'Marge'];

export interface CurrentUser {
  id: string;
  userName: string;
  image: string;
}

const defaultState: CurrentUser = {
  id: guid(),
  userName: selectRandomElementFromArray(names),
  image: 'https://randomuser.me/api/portraits/med/'
  + selectRandomElementFromArray(['men', 'women'])
  + '/'
  + Math.floor(Math.random() * 90)
  + '.jpg',
};

export const currentUser: Reducer<CurrentUser> = (state = defaultState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
