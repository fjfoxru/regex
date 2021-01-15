export default class Validator {
    validateUsername(username) {
        return /^[a-zA-Z][a-zA-Z0-9-_]*(?!\d{4,})[a-zA-Z]$/gm.test(username);
    }
  }