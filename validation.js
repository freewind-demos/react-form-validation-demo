export function checkUsername(username) {
  return username && username.length >= 6;
}

export function checkPassword(password) {
  return password && password.length >= 10;
}