import { SET_LANGUAGE } from './language.actions';

const languageReduser = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReduser;
