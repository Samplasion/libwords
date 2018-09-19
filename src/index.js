/**
 * Get a string in the format 'num item'
 * @param {number} num The number of items that determines if <code>item</code> should be plural.
 * @param {string} item The item to be eventually converted to plural
 * @return {string} A string containing the number and the word if <code>num</code> is 1, otherwise its plural.
 */
var plural = (num, item) => {
    if (num == 1) return `${num} ${item}`
    
    var i = wordPlural(item);
    
    return `${num} ${i}`
};

/**
 * Gets the plural of a string
 * @param {string} item The item in singular
 * @return {string} The item in plural
 */
var wordPlural = (item) => {

    var i = item;

    if (item.substr(-1) == "y")
      i = item.substr(0, item.length - 1) + "ies"
    else if (item.substr(-3) == "tch")
      i += "es"
    else if (item.substr(-2) == "ss")
      i += "es"
    else i += "s"

    return i
};

/**
 * Gets the singular of a string
 * @param {string} item The item in plural
 * @param {boolean} ie Whether the world should end in 'y' or 'ie' (only applies to words which end in 'ies').
 * @return {string} The item in singular
 */
var wordSingular = (item, ie = false) => {
    var i = item;

    if (item.substr(-3) == "ies")
	i = item.substr(0, item.length - 3) + (ie ? "ie" : "y")
    else if (item.substr(-2) == "es")
      i = item.substr(0, item.length - 2)
    else if (item.substr(-1) == "s")
      i = item.substr(0, item.length - 1)

    return i
};

module.exports = {
    plural,
    wordPlural,
    wordSingular
};
