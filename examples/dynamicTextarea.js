/*
 * example of dynamic height changes when user types in textarea
 * 
 *  REQUIRE: function getStyle for detection real height of textarea 
 */

function dynamicTextarea(textarea) {
    if(textarea.scrollTop > 0) {
        var height = parseInt(getStyle(textarea,'height'),10);
        var newHeight = height+textarea.scrollTop;
        textarea.style.height = newHeight+'px';
    }
}
        
EventUtils.addHandler(document.getElementById('textarea'), 'keypress', function(event) {
    var event = EventUtils.getEvent(event);
    dynamicTextarea(event.target);
});