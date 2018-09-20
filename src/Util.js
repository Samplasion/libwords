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
    constructor(item) {
        this._item = item;
    }
    
    /**
     * Requi
     * red toString() method
     * @return string The item defined in the constructor.
     */
    toString() {
        return this._item;
    }

    /**
     * Returns an object representation of the class.
     * @return {object}
     */
    toObject() {
	var ret = {}
	ret.item = this._item
	if (this.opts) ret.opts = this.options;
	return ret
    }
}

module.exports = Util;
