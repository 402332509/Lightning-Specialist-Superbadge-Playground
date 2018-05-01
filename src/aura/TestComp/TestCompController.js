({
    doInit : function(component, event, helper){
        component.set("v.item", [{a:3,b:4},{a:1,b:2}]);
        // component.set("v.radioId", component.find("radio3").getGlobalId());
        // console.log('*** component.find("radio3"): ',component.find("radio3").getGlobalId());
    },
    itemsChange : function(component, event, helper) {
        console.log('*** component.get("v.item"): ',component.get("v.item"));
    },
    cli : function(component){
        component.set("v.item", component.get("v.item").concat([{a:6,b:2}]));
    },
    handleChange: function (component, event) {
        var target = event.getSource();
        console.log('*** target: ',target);
        component.set("v.options", [
            {'label': '', 'value': target.get("v.value")}
        ]);
        // alert(target.get("v.value"));
        console.log('*** target.get("v.value"): ',target.get("v.value"));
    },
    expandAvatar: function(component, event){
        var target = event.target;
        $A.util.toggleClass(target, "slds-avatar_large");
    },
    resetAvatar: function(component, event){
        var target = event.target;
        $A.util.toggleClass(target, "slds-avatar_large");
    }
})
