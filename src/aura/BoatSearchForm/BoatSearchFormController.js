({
	doInit : function(component, event, helper) {
		var action = component.get("c.getBoatTypeList");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                console.log('From action variable : ');
                console.log(response.getReturnValue());
                component.set("v.boatTypeList",[].concat(response.getReturnValue()));
            }
            else{
                console.log("Failed with State : " + state);
            }
        });
        $A.enqueueAction(action);
	},
    onFormSubmit : function(component, event, helper) {
        var selectType = component.get("v.selectedType");
        var appEvent =  component.getEvent("formSubmit");
        appEvent.setParams({"formData" : {boatTypeId:selectType}});
        appEvent.fire();
	},
    create : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                'Name' : 'Default Boat',
                'Description__c' : 'Default Boat Desc.'
            }
        });
        createRecordEvent.fire();
        component.set("v.hideNewButton",false);
	}
})