({
    onBoatSelected : function(component, event, helper) {
        var boat = event.getParam("boat");
        console.log(boat);
        component.set("v.Id", boat.Id);
        var service = component.find("service");
        service.reloadRecord() ;
    },
    onRecordUpdated: function(component, event, helper) {

    }
})