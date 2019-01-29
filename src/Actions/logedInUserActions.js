export function getLogin(login) {
  return {
    type: "LOGIN",
    payload: login
  };
}

export function getLogout(logout) {
  return {
    type: "LOGOUT",
    payload: logout
  };
}
