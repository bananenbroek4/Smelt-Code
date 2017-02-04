// ----------------------
// --   moduleMarker   --
// ----------------------
// Usage: !moduleMarker <startX> <startY> <startZ> <markerName>


var moduleMarker =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var startX 	= 	smelt.args[0]-1;
			startY 	= 	smelt.args[1]-1;
			startZ 	= 	smelt.args[2];

			markerName = smelt.args[3];
		
			moduleStartX	=	-smelt.getCurrentCommandBlock().x - -startX;
			moduleStartY	=	-smelt.getCurrentCommandBlock().y - -startY;
			moduleStartZ	=	-smelt.getCurrentCommandBlock().z - -startZ;

		smelt.addCommandBlock(util.format("/summon area_effect_cloud ~%s ~%s ~%s {CustomName:\"%s\",Particle:\"take\",Duration:2147483647}", moduleStartX, moduleStartY, moduleStartZ, markerName),{auto:true,type:"chain"});

	}
}
module.exports = moduleMarker;