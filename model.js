function Model(data) {
	this.init(data)
}
Model.prototype.init = function(data){
	this.data = data || {};
}
Model.prototype.set = function(name, value){
	if(typeof(this.validate) == "function"){
		if(!this.validate(name,value)) return false
	}
	this.data[name] = value
	return this
}
Model.prototype.get = function(name){
	return this.data[name]
}
Model.prototype.isset = function(name){
	return Object.prototype.hasOwnProperty.call(this.data, name) && Object.prototype.propertyIsEnumerable.call(this.data, name)
}
Model.prototype.each = function(action) {
	for (var property in this.data) {
		action(property, this.data[property])
	}
}
Model.extend = function(props) {
	var child = function(data){this.data = data || {}}
	child.prototype = Model.prototype
	child.constructor = Model.prototype.init
	for (var property in props){
		if(props.hasOwnProperty(property))
		child.prototype[property] = props[property]
	}
	return child
}