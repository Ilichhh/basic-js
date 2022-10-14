const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
   constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
   }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = [];
    let letterIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i].toUpperCase())) {
        let position = this.alphabet.indexOf(message[i].toUpperCase());
        let shift = this.alphabet.indexOf(key[letterIndex % key.length].toUpperCase());
        result.push(this.alphabet[position + shift]);
        letterIndex++;
      } else {
        result.push(message[i]);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }

  
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    let result = [];
    let letterIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage[i])) {
        let position = this.alphabet.indexOf(encryptedMessage[i], 26);
        let shift = this.alphabet.indexOf(key[letterIndex % key.length].toUpperCase());
        result.push(this.alphabet[position - shift]);
        letterIndex++;
      } else {
        result.push(encryptedMessage[i]);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

