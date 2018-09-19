const Util = require('./Util.js')
    , CheckUtils = require('./CheckUtils.js')
    , { wordSingular } = require('./index.js');

/**
 * Represents a noun.
 * @extends Util
 */
 class Noun extends Util {
     
         /**
          * @param noun The noun
          * @param options The options (if any).
          */
         constructor(noun, options) {
             super(noun, options, ["shouldEndInIe"])
         }
	
	
	 /**
	  * Returns the singular if <code>noun<code> is plural, or itself otherwise
	  * @return {string} The noun in singular
	  */
         toSingular() {
             return wordSingular(this.toString(), this.shoulsEndInIe);
         }
 }
 
 module.exports = Noun
