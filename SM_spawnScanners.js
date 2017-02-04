// ----------------------
// -- spawn5x5scanners --
// ----------------------
// Usage: !encodeSector <startX> <startZ> <endX> <endZ> <height> <entity selector> <entity summoned>

/*	
			
*/

var spawnScanners =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var startX = smelt.args[0];
		var startZ = smelt.args[1];
		var endX = smelt.args[2];
		var endZ = smelt.args[3];

		var height = smelt.args[4];

		var entitySelector = smelt.args[5];
		var entityTags = smelt.args[6];

		smelt.addCommandBlock("/searge",{type:"chain",auto:true});

		for(var i = startX; i<=endX; i++)
		{
			for(var j = startZ; j<=endZ; j++)
			{
				smelt.addCommandBlock(util.format('/execute %s ~ ~ ~ /summon area_effect_cloud ~%s ~%s ~%s %s', entitySelector, i, height, j, entityTags),{type:"chain",auto:true,conditional:true});
			}
		}
	}
}

module.exports = spawnScanners;
