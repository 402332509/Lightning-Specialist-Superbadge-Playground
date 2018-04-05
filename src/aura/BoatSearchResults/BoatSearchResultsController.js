({
	doInit : function(component, event, helper) {
		
	},
    doSearch : function(component, event, helper){
        var formData = event.getParam("formData");
        console.log('formData:');
        console.log(formData);
        helper.onSearch(component,formData);
    }
})