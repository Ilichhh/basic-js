const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let domArr = [...domains].map(e => e.split('.').reverse().map(a => a = `.${a}`));

  domArr.forEach(e => {
    Object.keys(result).includes(e[0]) ? result[e[0]]++ : result[e[0]] = 1;
    if (e[1]) {
      Object.keys(result).includes(e.join('')) ? result[e.join('')]++ : result[e.join('')] = 1;
    }
    if (e[2]) {
      e.pop();
      Object.keys(result).includes(e.join('')) ? result[e.join('')]++ : result[e.join('')] = 1;
    }
  })

  return result;
}

module.exports = {
  getDNSStats
};
