var tmplt = function(){

    var model = [];
    var view = {};
    
    function init(){
        var all = document.getElementsByTagName("*");
        for (var i=0; i < all.length; i++) {
            var element = all[i];
            var tmpltName = element.getAttribute("tmplt");
            if(tmpltName){
                view[tmpltName] = element;
            }
        }
    }

    function update(){
        for(var name in view){
            var namelist = name.split(".");
            view[name].innerHTML = accesModelElement(namelist, model);
        }
    }

    function accesModelElement(list, object){
        var first = list[0];
        list.splice(0,1);
        object = object[first];
        if(list.length>0){
            return accesModelElement(list, object);
        } else {
            return object;
        }
    }

    return{
        init: init,
        update: update,
        model: model
    };
}();
