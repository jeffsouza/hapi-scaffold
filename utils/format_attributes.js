
module.exports = (attributes) => {

    var attrs = '';

    for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i].split(':');
        var type = attr[1].charAt(0).toUpperCase() + attr[1].slice(1);
        attrs += `\t${attr[0]}: ${type}`;
        if (i+1 != attributes.length)
            attrs += ',\n';
    }
    
    return attrs;

}