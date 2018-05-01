public class BoatSearchResults {
    @AuraEnabled
    public static List<Object> getBoats(String boatTypeId) {
        if (String.isBlank(boatTypeId)) {
            return [SELECT Id, Name, Picture__c, Contact__r.Name, Boat__c.Geolocation__Latitude__s, Boat__c.Geolocation__Longitude__s FROM Boat__c ];
        }
        return [SELECT Id, Name, Picture__c, Contact__r.Name, Boat__c.Geolocation__Latitude__s, Boat__c.Geolocation__Longitude__s FROM Boat__c WHERE BoatType__c = :boatTypeId];
    }
}