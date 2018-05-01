({
    onBoatClick : function(component, event, helper) {
        var boatSelectEvent = component.getEvent("boatSelect");
        boatSelectEvent.setParams({"boatId" : component.get("v.boat.Id")});
        boatSelectEvent.fire();
        var boatSelectedEvent = $A.get("e.c:BoatSelected");
        boatSelectedEvent.setParams({"boat": component.get("v.boat")});
        boatSelectedEvent.fire();
        //send geolocation to map.cmp through the PlotMapMarker Application event
        var boat = component.get("v.boat");
        console.log(boat);
        console.log(boat.Id);
        var lat = boat.Geolocation__Latitude__s;
        var long = boat.Geolocation__Longitude__s;
        var label = boat.Name;
        var sObjectId = boat.Id;
        var PlotMapMarker = $A.get("e.c:PlotMapMarker");
        PlotMapMarker.setParams({
            "lat"   : lat,
            "long"  : long,
            "label" : label,
            "SObjectId" : sObjectId});
        PlotMapMarker.fire();
    }
})