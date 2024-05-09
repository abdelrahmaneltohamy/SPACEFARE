using DisposalService as service from '../../srv/com-services';
annotate service.Galactic_Spacefarer with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'age',
                Value : age,
            },
            {
                $Type : 'UI.DataField',
                Label : 'gender',
                Value : gender,
            },
            {
                $Type : 'UI.DataField',
                Label : 'stardust_collection',
                Value : stardust_collection,
            },
            {
                $Type : 'UI.DataField',
                Label : 'wormhole_navigation_skill',
                Value : wormhole_navigation_skill,
            },
            {
                $Type : 'UI.DataField',
                Label : 'origin_planet',
                Value : origin_planet,
            },
            {
                $Type : 'UI.DataField',
                Label : 'spacesuit_color',
                Value : spacesuit_color,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'age',
            Value : age,
        },
        {
            $Type : 'UI.DataField',
            Label : 'gender',
            Value : gender,
        },
        {
            $Type : 'UI.DataField',
            Label : 'stardust_collection',
            Value : stardust_collection,
        },
    ],
);

