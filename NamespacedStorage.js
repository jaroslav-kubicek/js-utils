function NamespacedStorage(namespace) {
    if(this instanceof NamespacedStorage) {
        this.namespace = namespace;
    } else {
        console.warn('You should instantiate this instead of call it as regular function!');
        return new NamespacedStorage(namespace);
    }
}
            
NamespacedStorage.prototype.setJSON = function(name,data) {
    data._dateOfInsert = new Date();
    localStorage.setItem(this.namespace+name,JSON.stringify(data));
}
            
NamespacedStorage.prototype.getJSON = function(name) {
    return JSON.parse(localStorage.getItem(this.namespace+name));
}
NamespacedStorage.prototype.clearNamespace = function() {
    var removed = 0;
    for (var key in localStorage) {
        if (key.indexOf(this.namespace) >= 0) {
            localStorage.removeItem(key);
            removed++;
        }
    }
    return removed;
}
            
NamespacedStorage.prototype.removeByDate = function(date) {
    if(date instanceof Date) {
        var removed = 0;
        for(var key in localStorage) {
            var data = JSON.parse(localStorage.getItem(key));
            if(data){ // Opera sometimes returns null?
                if(data._dateOfInsert instanceof Date) {
                    var dateOfInsert = data._dateOfInsert;
                } else {
                    var dateOfInsert = new Date(data._dateOfInsert); 
                }
                if (date > dateOfInsert && key.indexOf(this.namespace) >= 0) {
                    localStorage.removeItem(key);
                    removed++;
                }
            }
        }
        return removed;                    
    } else {
        throw new Error('This method accept only Date object');
    }
}