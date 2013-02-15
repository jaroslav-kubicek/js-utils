/*
 * TODO: invalidate items by date (and remove them)
 */
function NamespacedStorage(namespace) {
    if(this instanceof NamespacedStorage) {
        this.namespace = namespace;
    } else {
        console.warn('You should instantiate this instead of call it as regular function!');
        return new NamespacedStorage(namespace);
    }
}
            
NamespacedStorage.prototype.setJSON = function(name,data) {
    localStorage.setItem(this.namespace+name,JSON.stringify(data));
}
            
NamespacedStorage.prototype.getJSON = function(name) {
    return JSON.parse(localStorage.getItem(this.namespace+name));
}