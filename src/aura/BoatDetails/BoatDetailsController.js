({
    onBoatSelected : function(component, event, helper) {
        var boat = event.getParam("boat");
        console.log(boat);
        component.set("v.Id", boat.Id);
        var service = component.find("service");
        service.reloadRecord() ;
    },
    onRecordUpdated: function(component, event, helper) {
        var boatReviews = component.find("boatreviews");
        if(boatReviews){
            boatReviews.refresh();
        }
    },
    onBoatReviewAdded : function(component,event,helper){
        component.find("details").set("v.selectedTabId", "boatreviewtab");
        var boatReviews = component.find("boatreviews");
        if(boatReviews){
            boatReviews.refresh();
        }
    }
})