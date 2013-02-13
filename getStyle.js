/*
 * Get used style for element (how it was rendered)
 * For example, if you declare font-size: 1em, it returns real size in pixels
 * 
 * NOTES: 
 * 
 * DOESN'T work with all css properties, e.g. FF returns an empty string for border-*
 * Use margin-* a padding-* instead of margin and padding due to lack of the support for these shortcuts in FF
 * getComputedStyle works in IE9+, remove condition, when IE8 drop to zero
 * color is usually returned in rgb(a) notation
 *
 * @param elem Element
 * @param strCssRule String CSS property
 */
function getStyle(elem, strCssRule){
    var strValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle){
        strValue = document.defaultView.getComputedStyle(elem, "").getPropertyValue(strCssRule);
    }
    else if(elem.currentStyle){
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
        strValue = elem.currentStyle[strCssRule];
    }
    return strValue;
}