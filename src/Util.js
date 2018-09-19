/**
 * A boilerplate class to be used for various parts of the speech.
 * @author Samplasion
 */
class Util {

    /**
     * Constructs the item.
     * @param item string The item.
     * @param options object The options to be accounted.
     * @param goodKeys ?Array The array of good keys.
     */
    constructor(item, options, goodKeys = null) {
        this._item = item;
        
        /** Set the options as built-in */
        for (var opt in options) {
            if (goodKeys) {
                if (goodKeys.includes(opt)) this[opt] = options[opt];
            } else {
                this[opt] = options[opt];
            }
        }
    }
    
    /**
     * Required toString() method
     * @return string The item defined in the constructor.
     */
    toString() {
        return this._item;
    }
}

module.exports = Util;
