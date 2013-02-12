
function EventObject(event) {
    if (this instanceof EventObject) {
        this.event= event ? event : window.event;
        this.target = this.event.target ? this.event.target : this.event.srcElement;
    } else {
        console.warn('You should instantiate EventObject instead call it as regular function!');
        return new EventObject(event);
    }
}
EventObject.prototype.preventDefault = function() {
    if(this.event.preventDefault) {
        this.event.preventDefault();
    } else {
        this.event.returnValue = false;
    }
}
EventObject.prototype.stopPropagation = function() {
    if(this.event.stopPropagation) {
        this.event.stopPropagation();
    } else {
        this.event.cancelBubble = true;
    }
}

var EventUtils = {
    
    addHandler : function(element,type,handler) {
        if(element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if(element.attachEvent) { // IE6-8
            element.attachEvent('on'+type,handler);
        } else {
            element['on'+type]=handler;
        }
    },
    removeHandler :function(element,type,handler) {
        if(element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if(element.detachEvent) { // IE6-8
            element.detachEvent('on'+type,handler);
        } else {
            element['on'+type] = null;
        }
    },
    getEvent : function(event) {
        return new EventObject(event);
    }
    
}