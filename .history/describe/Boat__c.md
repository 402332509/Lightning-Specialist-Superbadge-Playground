2018-04-06 23:42:15
```java
Boat__c Describe:
----------------------------------------------------------------------------------------------------
Total Fields: 	20
----------------------------------------------------------------------------------------------------
Label                                   Name                                    Type                Length 
-----------------------------------------------------------------------------------------------------------
Boat Name                               Name                                    string              80     
Boat Type                               BoatType__c                             reference           18     
Contact                                 Contact__c                              reference           18     
Created By ID                           CreatedById                             reference           18     
Created Date                            CreatedDate                             datetime                   
Deleted                                 IsDeleted                               boolean                    
Description                             Description__c                          textarea            255    
Geolocation                             Geolocation__c                          location                   
Geolocation (Latitude)                  Geolocation__Latitude__s                double                     
Geolocation (Longitude)                 Geolocation__Longitude__s               double                     
Last Modified By ID                     LastModifiedById                        reference           18     
Last Modified Date                      LastModifiedDate                        datetime                   
Last Referenced Date                    LastReferencedDate                      datetime                   
Last Viewed Date                        LastViewedDate                          datetime                   
Length                                  Length__c                               double                     
Picture                                 Picture__c                              url                 255    
Price                                   Price__c                                currency                   
Record ID                               Id                                      id                  18     
System Modstamp                         SystemModstamp                          datetime                   
Year Built                              Year_Built__c                           double                     

----------------------------------------------------------------------------------------------------
Record Type Info: 	1
----------------------------------------------------------------------------------------------------
Recordtypeid        Name                               Available Default        
--------------------------------------------------------------------------------
012000000000000AAA  Master                             True      True           

----------------------------------------------------------------------------------------------------
ChildRelationships Info: 	19
----------------------------------------------------------------------------------------------------
Childsobject                  Field                         Cascadedelete                 Relationshipname              
------------------------------------------------------------------------------------------------------------------------
AttachedContentDocument       LinkedEntityId                True                          AttachedContentDocuments      
Attachment                    ParentId                      True                          Attachments                   
BoatReview__c                 Boat__c                       True                          Boat_Reviews__r               
CollaborationGroupRecord      RecordId                      True                          RecordAssociatedGroups        
CombinedAttachment            ParentId                      True                          CombinedAttachments           
ContentDistribution           RelatedRecordId               True                                                        
ContentDocumentLink           LinkedEntityId                True                          ContentDocumentLinks          
ContentVersion                FirstPublishLocationId                                                                    
DuplicateRecordItem           RecordId                      True                          DuplicateRecordItems          
EmailMessage                  RelatedToId                                                 Emails                        
EntitySubscription            ParentId                      True                          FeedSubscriptionsForEntity    
FeedComment                   ParentId                                                                                  
FeedItem                      ParentId                      True                                                        
FlowRecordRelation            RelatedRecordId                                                                           
Note                          ParentId                      True                          Notes                         
NoteAndAttachment             ParentId                      True                          NotesAndAttachments           
ProcessInstance               TargetObjectId                True                          ProcessInstances              
ProcessInstanceHistory        TargetObjectId                                              ProcessSteps                  
TopicAssignment               EntityId                      True                          TopicAssignments              


```

