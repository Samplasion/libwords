const { wordSingular } = require('./index.js');

/**
 * A class containing word checking utilities
 */
class CheckUtils {

    /**
     * Checks if the given noun is singular
     @param {string} noun The noun
     @return boolean <code>true</code> if the noun is singular, <code>false</code> otherwise
     */
    static isSingular(noun) {
	return wordSingular(noun) == noun;
    }
}

module.exports = CheckUtils
