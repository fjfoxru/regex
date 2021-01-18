export default class Validator {
    validateUsername(username) {
        return !/^[\d-_]|[\d-_]$/.test(username) && !/[^\w-]/.test(username) && !/\d{4}/.test(username);
    }
  }


