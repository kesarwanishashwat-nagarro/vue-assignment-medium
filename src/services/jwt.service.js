const TOKEN_KEY = "medium_token";
const USER_KEY = "md_user"

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const saveToken = token => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

export const getUsername = () => {
  return window.localStorage.getItem(USER_KEY);
};

export const deleteUsername= () => {
  window.localStorage.removeItem(USER_KEY);
};

export const saveUsername = (name) => {
  window.localStorage.setItem(USER_KEY, name);
};

export default { getToken, saveToken, deleteToken, getUsername, deleteUsername, saveUsername};