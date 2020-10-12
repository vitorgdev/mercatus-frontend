import axios from "axios";

import Router from "../router";

import JWT from "./jwt";

// const config = {
//   baseURL: process.env.VUE_APP_ROOT_API,
// headers: {
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   Authorization: `Bearer ${JWT.getToken()}`
// }
// };

const Api = {
  async init() {
    axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
    axios.defaults.headers.common["Authorization"] = `Bearer ${JWT.getToken()}`;
    // axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
    // axios.defaults.headers["get"]["Content-Type"] = "application/json";
    ["get", "post", "put", "delete"].forEach(method => {
      axios.defaults.headers[method]["Content-Type"] = "application/json";
    });
    axios.interceptors.response.use(function(response) {
      return response;
    }, this.handlerError);
  },
  async handlerError(error) {
    console.log("entoru");
    var errors = {
      "401": function() {
        JWT.destroyToken();
        Router.push({ name: "login" });
        return "Não Autenticado";
      }
    };
    return errors[error.response.status]();
  },
  async query(resource, data) {
    return new Promise(resolve => {
      const result = axios.get(resource, { params: data });
      resolve(result);
    });
  },

  get(resource, slug = "") {
    return new Promise(resolve => {
      const result = axios.get(`${resource}/${slug}`);
      resolve(result);
    });
  },

  async post(resource, params) {
    return new Promise(resolve => {
      const result = axios.post(`${resource}`, params);
      resolve(result);
    });
  },

  async put(resource, id, params) {
    return new Promise(resolve => {
      const result = axios.put(`${resource}/${id}`, JSON.stringify(params));
      resolve(result);
    });
  },

  patch(resource, id, params) {
    return axios.patch(`${resource}/${id}`, JSON.stringify(params));
  },

  delete(resource, id) {
    return new Promise(resolve => {
      const result = axios.delete(`${resource}/${id}`);
      resolve(result);
    });
  }
};

export default Api;
