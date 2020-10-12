// import JWT from "../../api/jwt";
import storeAuth from "../../modules/auth/_store";
import store from "../../store";

import JWT from "../../api/jwt";

const STORE_KEY = "$_auth";

const verifyAuth = async () => {
  if (!(STORE_KEY in store._modules.root._children)) {
    store.registerModule(STORE_KEY, storeAuth);
  }
  let autenticated = store.getters["$_auth/authenticated"];
  if (!Object.prototype.hasOwnProperty.call(autenticated, "user")) {
    if (JWT.getToken()) {
      await store.dispatch("$_auth/getUserInformationWithToken");
      return true;
    }
    return false;
  } else {
    return true;
  }
};

export default {
  verifyAuth
};
