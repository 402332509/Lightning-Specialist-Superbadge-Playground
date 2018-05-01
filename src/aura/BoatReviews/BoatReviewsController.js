({
    doInit : function(component, event, helper) {
        helper.onInit(component, event);
    },
    onUserInfoClick : function(component,event,helper){
        var navEvt = $A.get("e.force:navigateToSObject");
        var currentTarget = event.currentTarget;
        var userId = currentTarget.dataset.userid;
        navEvt.setParams({
            "recordId": userId
        });
        navEvt.fire();
    }
})