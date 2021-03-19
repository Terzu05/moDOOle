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

##### OUTPUT:

In console:
`modoole: "content"`

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
