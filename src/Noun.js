const Util = require('./Util.js')
    , CheckUtils = require('./CheckUtils.js')
    , { wordSingular, wordPlural } = require('./index.js');

/**
 * Represents a noun.
 * @extends Util
 */
class Noun extends Util {
     
    /**
     * Creates a noun. Options:
     * <ul>
     * <li><code>shouldEndInIe</code> - Whether, if the plural ends in 'ies', the singular should end in 'y' oi 'ie'</li>
     * </ul>
     * @param noun The noun.
     * @param options The options.
     */
    constructor(noun, options) {
        super(noun);

	/** For the toObject() method */
	this.options = opts;
	
	this.shouldEndInIe = options.shouldEndInIe || false;
    }
	
	
    /**
     * Returns the singular if <code>noun</code> is plural, or itself otherwise
     * @return {Noun} The noun in singular
     */
    getSingular() {
        return new Noun(wordSingular(this.toString(), this.shoulsEndInIe));
    }

    /**
     * Returns the plural if <code>noun</code> is plural, or itself otherwise
     * @return {Noun} The noun in plural
     */
    getPlural() {
	return new Noun(wordPlural(this.toString()));
    }
}
 
module.exports = Noun
