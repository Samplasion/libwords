const { wordSingular } = require('./index.js');

/**
 * A class containing word checking utilities
 */
class CheckUtils {

    /**
     * Checks if the given noun is singular
     */
    static isSingular(noun) {
	return wordSingular(noun) == noun;
    }
}

module.exports = CheckUtils
