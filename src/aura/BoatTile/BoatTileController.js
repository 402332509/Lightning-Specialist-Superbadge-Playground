({
    onBoatClick : function(component, event, helper) {
        var boatSelectEvent = component.getEvent("boatSelect");
        boatSelectEvent.setParams({"boatId" : component.get("v.boat.Id")});
        boatSelectEvent.fire();
        var boatSelectedEvent = $A.get("e.c:BoatSelected");
        boatSelectedEvent.setParams({"boat": component.get("v.boat")});
        boatSelectedEvent.fire();
    }
})