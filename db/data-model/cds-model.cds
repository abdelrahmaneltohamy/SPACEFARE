namespace my.communitymanager;
using { managed } from '@sap/cds/common';
entity Galactic_Spacefarer{
   key id: Integer; //Unique identifier for each spacefarer.
    name: String; //Name of the spacefarer.
    age: Integer; //age of the spacefarer.
    gender: String; //Gender of the spacefarer.
    stardust_collection: Integer; // amount of stardust collected by the spacefarer.
    wormhole_navigation_skill: Integer; // Skill level of the spacefarer in navigating wormholes.
    origin_planet: String; //Home planet of the spacefarer.
    spacesuit_color: String; //Color of the spacefarer's spacesuit.
}
entity Intergalactic_Departments{
    key id: Integer; //Unique identifier for each department.
    name: String; //Name of the department.
    description: String;//Description of the department's function
}
entity Positions{
    key id: Integer; //Unique identifier for each position.
    title:String; //Title of the position.
    description: String;//Description of the position's responsibilities.
    department_id: Integer;
}
entity Spacefarer_Positions {
    id: Integer;
    spacefarer_id:Integer;
    position_id:Integer
}
entity Buckets {
key ID : Integer;
title : String;
location : Association to Locations;
locationName : String;
level : Boolean;
}

entity Locations {
key ID : Integer;
name : String;
bucket : Association to Buckets on bucket.location = $self;
long : Decimal;
lat : Decimal;
}

entity CallsForDisposal : managed {
key ID : UUID;
bucket : Association to Buckets;
level : Boolean;
}