public class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if(String.isBlank(boatTypeId)){
            return [select Id,Name,Picture__c ,Contact__r.Name from Boat__c ];
        }
        return [select Id,Name,Picture__c ,Contact__r.Name from Boat__c where BoatType__c = :boatTypeId];
    }
}