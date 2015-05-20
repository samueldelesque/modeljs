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



me.fullName()
// -> "Samuel Delesque"

me.get("age")
// -> 32
```




### Credits

This project was brought to you by [Samuel Delesque](http://samueldelesque.me).
