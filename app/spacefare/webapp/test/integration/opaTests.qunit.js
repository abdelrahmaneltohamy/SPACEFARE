sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'spacefare/test/integration/FirstJourney',
		'spacefare/test/integration/pages/Galactic_SpacefarerList',
		'spacefare/test/integration/pages/Galactic_SpacefarerObjectPage'
    ],
    function(JourneyRunner, opaJourney, Galactic_SpacefarerList, Galactic_SpacefarerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('spacefare') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheGalactic_SpacefarerList: Galactic_SpacefarerList,
					onTheGalactic_SpacefarerObjectPage: Galactic_SpacefarerObjectPage
                }
            },
            opaJourney.run
        );
    }
);