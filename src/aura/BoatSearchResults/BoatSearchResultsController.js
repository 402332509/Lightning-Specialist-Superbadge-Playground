({
	doInit : function(component, event, helper) {
		
	},
    doSearch : function(component, event, helper){
        var params = event.getParam("arguments");
        if(params){
            var boatTypeId = params.boatTypeId;
            helper.onSearch(component,boatTypeId);
        }
    },
    onBoatSelect : function(component,event,helper){
        var params = event.getParams("arguments");
        if(params){
            var boatId = params.boatId;
            component.set("v.selectedBoatId", boatId);
        }
    }
})