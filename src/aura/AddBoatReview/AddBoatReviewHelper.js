({
    onInit : function(component,event) {
        component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (entityAPIName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                // var error = component.get("v.recordError");
                var boat=component.get("v.boat");
                if(rec === null) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    component.set("v.boatReview.Boat__c",boat.Id);
                }
            })
        );
    }
})