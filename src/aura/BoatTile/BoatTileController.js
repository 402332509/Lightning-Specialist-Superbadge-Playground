({
    onBoatClick : function(component, event, helper) {
        var boatSelectEvent = component.getEvent("boatSelect");
        boatSelectEvent.setParams({"boatId" : component.get("v.boat.Id")});
        boatSelectEvent.fire();
    }
})