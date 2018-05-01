({
    onInit : function(component, event) {
        if(!component.get("v.boat")){
            return;
        }
        var action = component.get("c.getAll");
        action.setParam("boatId", component.get("v.boat.Id"));
        action.setCallback(this,function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                console.log('From action variable : ');
                console.log(response.getReturnValue());
                component.set("v.boatReviews",[].concat(response.getReturnValue()));
            }
            else{
                console.log("Failed with State : " + state);
            }
        });
        $A.enqueueAction(action);
    }
})