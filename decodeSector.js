// ----------------------
// --     decodeSector     --
// ----------------------
// Usage: !decodeSector <sizeX> <sizeZ> <xStart> <zStart>

/*	
			
*/

var DecodeSector =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var sizeX = smelt.args[0];
		var sizeZ = smelt.args[1];

		var startX = smelt.args[2];
		var startZ = smelt.args[3];

		var totalBits = sizeX * sizeZ;

		var endX = startX- -(sizeX - 1);
		var endZ = startZ- -(sizeZ - 1);

		var i = 0;

		smelt.addCommandBlock(util.format('/fill %s 4 %s %s 4 %s barrier 0 replace water *', startX, startZ, endX, endZ), {auto:true,type:"chain",conditional:false});

		for(var x = 0; x < sizeX; x++)
		{
			for (var z = 0; z < sizeZ; z++)
			{
				if(i < totalBits)	
				{
					var iRemainder = totalBits - i;
					var power = Math.pow(2,iRemainder);
					i++;
				}

				var xHolder = x - -startX;
				var zHolder = z - -startZ;
				smelt.addCommandBlock(util.format('/scoreboard players remove @e[tag=SM_isSelected,score_SM_bV_min=%s] SM_bV %s', power, power), {auto:true,type:"chain",conditional:false});
				smelt.addCommandBlock(util.format('/setblock %s 4 %s water', xHolder, zHolder), {auto:true,type:"chain",conditional:true});
			}

		}
	}
}

module.exports = DecodeSector;
