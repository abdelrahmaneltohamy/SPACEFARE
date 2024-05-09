using my.communitymanager as my from '../db/data-model/cds-model';

service DisposalService @(requires:'authenticated-user')
{

entity Buckets @readonly as projection on my.Buckets;
entity Locations @readonly as projection on my.Locations;
entity CallsForDisposal @insertonly as projection on my.CallsForDisposal;
entity Galactic_Spacefarer as projection on my.Galactic_Spacefarer;
entity Intergalactic_Departments as projection on my.Intergalactic_Departments;
@readonly
entity Galactic_Spacefarer_Positions as select from Galactic_Spacefarer mixin{
    LINK_TO_SPACEFARER_POSITIONS : Association[1..*] to Spacefarer_Positions on  LINK_TO_SPACEFARER_POSITIONS.spacefarer_id = id
}into {
    key id,
     name,
    age,
    gender,
    stardust_collection,
    wormhole_navigation_skill,
    origin_planet,
    spacesuit_color
};
entity Positions as projection on my.Positions;
entity Spacefarer_Positions as projection on my.Spacefarer_Positions;


}