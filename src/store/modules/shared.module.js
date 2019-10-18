import { SharedService } from '../../services/shared.service'
import {
  GET_PROFILE
} from '../types/actions.type';
import {
  LOAD_START,
  LOAD_END,
  PROFILE_SET
} from "../types/mutations.type";

const dummyProfile = {
  "username": "jake",
  "bio": "I work at statefarm",
  "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
  "following": false
}

export default {
  namepaced: true,
  state: {
    selectedProfile: dummyProfile
  },
  mutations: {
    [PROFILE_SET](state, { profile }) {
      state.selectedProfile = profile;
    }
  },
  actions: {
    [GET_PROFILE]({ commit }, params) {
      commit(LOAD_START);
      return SharedService.getProfile(params)
        .then(({ data }) => {
          commit(PROFILE_SET, data);
        })
        .catch(error => {
          throw new Error(error);
        })
        .finally(() => {
          commit(LOAD_END);
        });
    }
  }
}

