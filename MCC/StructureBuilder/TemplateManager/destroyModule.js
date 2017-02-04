// ----------------------
// --   destroyModule  --
// ----------------------
// Usage: !destroyModule <startX> <startY> <startZ> <endX> <endY> <endZ>


var destroyModule =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var startX 	= 	smelt.args[0]-1;
			startY 	= 	smelt.args[1]-1;
			startZ 	= 	smelt.args[2];
			endX 	= 	smelt.args[3]- -1;
			endY 	= 	smelt.args[4]- -1;
			endZ 	= 	smelt.args[5];

			markerName = smelt.args[6];

		var	moduleStartX	=	-smelt.getCurrentCommandBlock().x - -startX;
			moduleStartY	=	-smelt.getCurrentCommandBlock().y - -startY;
			moduleStartZ	=	-smelt.getCurrentCommandBlock().z - -startZ;

		var distanceEndX	=	endX - startX;
			distanceEndY	=	endY - startY;
			distanceEndZ	=	endZ - startZ;

		smelt.addCommandBlock(util.format("/execute @e[type=area_effect_cloud,name=%s] ~ ~ ~ /kill @e[type=area_effect_cloud,name=!%s,dx=%s,dy=%s,dz=%s]", markerName, markerName, distanceEndX, distanceEndY, distanceEndZ),{auto:true,type:"chain"});
		
			moduleStartX	=	-smelt.getCurrentCommandBlock().x - -startX;
			moduleStartY	=	-smelt.getCurrentCommandBlock().y - -startY;
			moduleStartZ	=	-smelt.getCurrentCommandBlock().z - -startZ;

			moduleEndX	=	-smelt.getCurrentCommandBlock().x - -endX;
			moduleEndY	=	-smelt.getCurrentCommandBlock().y - -endY;
			moduleEndZ	=	-smelt.getCurrentCommandBlock().z - -endZ;

		smelt.addCommandBlock(util.format("/entitydata @e[type=area_effect_cloud,name=%s] {Duration:1}", markerName),{auto:true,type:"chain"});

		smelt.addCommandBlock(util.format("/execute @e[type=area_effect_cloud,name=%s] ~ ~ ~ /fill ~ ~ ~ ~%s ~%s ~%s air", markerName, distanceEndX, distanceEndY, distanceEndZ),{auto:true,type:"chain"});

	}
}
module.exports = destroyModule;