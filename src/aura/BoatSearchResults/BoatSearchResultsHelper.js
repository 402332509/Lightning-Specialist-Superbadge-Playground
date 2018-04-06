({
	onSearch : function(component, item, callback) {
		var action = component.get("c.getBoats");
        action.setParams({ 'boatTypeId' : item });
        console.log(action.getParams('boatTypeId'));
        action.setCallback(this,function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                console.log('From action variable : ');
                console.log(response.getReturnValue());
                component.set("v.boatList",[].concat(response.getReturnValue()));
            }
            else{
                console.log("Failed with State : " + state);
            }
        });
        $A.enqueueAction(action);
	}
})