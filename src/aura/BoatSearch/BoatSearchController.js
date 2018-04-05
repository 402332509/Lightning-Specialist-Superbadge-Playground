({
	onFormSubmit : function(component, event, helper){
        var formData = event.getParam("formData");
        console.log('formData:');
        console.log(formData);
        // component.set("boatTypeId", formData.boatTypeId);
        var boatSearchResults = component.find("sbr");
        boatSearchResults.search(formData.boatTypeId);
    }
})