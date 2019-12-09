export function isEmpty(val) {
  return val.trim().length === 0;
}

// Very basic approach
// export function isValidEmail(val) {
//   return val.includes('@');
// }

// Using regex email
// export function emailIsValid(email) {
//   const re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
export function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Using regex email
// export function emailIsValid(email) {
//   return new RegExp('/^[^s@]+@[^s@]+.[^s@]+$/').test(email);
// }
