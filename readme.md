# tmplt.js
Super lightweight client-side templating engine that separates model and view.

## How to use:
1) Create some html and link it to the model using the `tmplt` property.

```
<h1 tmplt="title"></h1>
```

2) Update the model using javascript

```
tmplt.init();
tmplt.model.title = "This is my title"
tmplt.update();
```

See the example for more info
