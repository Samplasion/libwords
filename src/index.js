var plural = (num, item) => {
    if (num == 1) return `${num} ${item}`
    
    var i = wordPlural(item);
    
    return `${num} ${i}`
}

var wordPlural = (item) => {

    var i = item;

    if (item.substr(-1) == "y")
      i = item.substr(0, item.length - 1) + "ies"
    else if (item.substr(-3) == "tch")
      i += "es"
    else i += "s"

    return i
}
var wordSingular = (item, ie = false) => {
    var i = item;

    if (item.substr(-3) == "ies")
      i = item.substr(0, item.length - 3) + (ie ? "ie" : "y")
    else if (item.substr(-2) == "es")
      i = item.substr(0, item.length - 2)
    else if (item.substr(-1) == "s")
      i = item.substr(0, item.length - 1)

    return i
}
module.exports = {
    plural,
    wordPlural,
    wordSingular
}
