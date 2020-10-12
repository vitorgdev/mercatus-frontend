import api from "../_api";
import JWT from "../../../api/jwt";

const getAuthenticate = async ({ commit }, object) => {
  const response = await api.getAuthenticate(object);
  JWT.saveToken(response.data.token);
  commit("SET_USER_AUTHENTICATED", response.data);
  return response;
};

const getUserInformationWithToken = async ({ commit }) => {
  const response = await api.getUserInformationWithToken();
  commit("SET_USER_AUTHENTICATED", response.data);
  return response;
};

export default {
  getAuthenticate,
  getUserInformationWithToken
};
