window.onload = function(){
    tmplt.init(); //load the template engine
    tmplt.model.tmplt = "tmplt.js"
    tmplt.model.user = {name: "John", age:"52"}; //set the model data
    tmplt.update(); //update the html view
};
