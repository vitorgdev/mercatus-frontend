import Api from "@/api";

const getAuthenticate = async object => {
  const response = await Api.post("auth/login", object);
  return response;
};

const getUserInformationWithToken = async () => {
  const response = await Api.get("auth/checkToken");
  return response;
};

export default { getAuthenticate, getUserInformationWithToken };
