global with sharing class BoatSearch {
	@AuraEnabled
    global static List<BoatType__c> getBoatTypeList (){
        return [select Id,Name from BoatType__c];
    } 
}