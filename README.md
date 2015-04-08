# Model.js
A simple Model for front and backend JS development.

# Example

```
var User = Model.extend({
  fullName: function(){
    return this.get("firstname")+" "+this.get("lastname")
  }
})

var me = new User({
  firstname: "Samuel",
  lastname: "Delesque",
})

me.set("age",32)

var age = me.get("age")

//"Samuel Delesque"
var fullname = me.fullName()
```
