sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'spacefare',
            componentId: 'Galactic_SpacefarerObjectPage',
            contextPath: '/Galactic_Spacefarer'
        },
        CustomPageDefinitions
    );
});