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
      * @param options The options (if any) {@link index.js}
      */
      constructor(noun, options) {
          super(noun, options, ["shouldEndInIe"])
      }
      
      toSingular() {
          return wordSingular(this.toString());
      }
 }
 
 module.exports = Noun
