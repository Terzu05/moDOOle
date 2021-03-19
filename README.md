# What is this?

This is the best package for creating web with node.js if you don't want to use express js :)

# Setup

`npm i modoole --save`

# How to use this think?

## in code:
```
const doo = require('modoole');
//insted of "doo" you can use any other name

doo.web(5000, function(){
    //modoole functions(and code)
});
```

## Functions

### doo.log();

##### OPTIONS:

`doo.log(content);`

content:
default = "I'm working!"

##### EXAMPLE OUTPUT:

In console:
`modoole: "content"`

##### APPLICATIONS:

1. See if the modoole is working

### doo.route();

##### OPTIONS:

`doo.route(fileName, routeName);`

fileName:
Name of the HTML file that will show on the route.
examples: "./index.html", "./routes/aboutus.html"

routeName:
Name of the route that will be created. (write without /)
default = ""
examples: "home", "about us"

##### EXAMPLE INPUTS:

1. 
```
doo.route(./index.html);
```
2. 
```
doo.route(./aboutus.html, aboutus);
```

##### EXAMPLE OUTPUTS:

1. 
on web http://localhost:port/:
    Contents of ./index.html

2. 
on web http://localhost:port/aboutus:
    Contents of ./aboutus.html

##### APPLICATIONS:

1. See if the modoole is working

### doo.route();

##### OPTIONS:

`doo.route(fileName, routeName);`

fileName:
Name of the HTML file that will show on the route.

routeName:
Name of the route that will be created. (write without /)
default = ""

##### EXAMPLE INPUT:

1. 
```
doo.route(./index.html);
```
2. 
```
doo.route(./aboutus.html, aboutus);
```

##### OUTPUT:

1. 
on web http://localhost:port/:
    Contents of ./index.html

2. 
on web http://localhost:port/aboutus:
    Contents of ./aboutus.html

##### APPLICATIONS:

1. See if the modoole is working

### doo.setViewFolder();

##### OPTIONS:

`doo.setViewFolder(folderName);`

folderName:
path to the folder that will contain all your views
default = ""

##### EXAMPLE INPUT:

1. 
```
doo.setViewFolder(./views);
```

##### APPLICATIONS:

Set the vews folder so you dont need to type it everytime your using `doo.routes()`
instead of 
```
doo.routes(./views/index.html);
doo.routes(./views/aboutus.html, aboutus);
doo.routes(./views/contacts.html, contacts);
``` 
you can use 
```
doo.setViewFolder(./views);
doo.routes(index.html);
doo.routes(aboutus.html, aboutus);
doo.routes(contacts.html, contacts);
```
