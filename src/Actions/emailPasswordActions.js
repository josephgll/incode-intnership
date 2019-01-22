export function signUp(emailPassword){
  return {
    type: "SIGNUP",
    payload: emailPassword
  }
}
