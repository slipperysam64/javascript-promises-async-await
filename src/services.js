const { delay } = require("lodash");

fetchWithTimeout(delay); {
    return new Promise(resolve => setTimeout(resolve, delay));
}