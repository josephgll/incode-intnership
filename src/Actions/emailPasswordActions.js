export function signUp(emailPassword) {
  return {
    type: "SIGNUP",
    payload: emailPassword
  };
}

export function verify(code) {
  return {
    type: "VERIFY",
    payload: code
  };
}

export function removeUnverified(email) {
  return {
    type: "REMOVEUNVERIFIED",
    payload: email
  };
}
