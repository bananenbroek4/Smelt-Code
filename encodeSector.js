// ----------------------
// --     encodeSector     --
// ----------------------
// Usage: !encodeSector <sizeX> <sizeZ> <xStart> <zStart>

/*	
			
*/

var EncodeSector =
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

		smelt.addCommandBlock('/scoreboard players set @e[tag=SM_isSelected] SM_bV 0');

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

				smelt.addCommandBlock(util.format('/execute @e[tag=SM_testWater] ~ ~ ~ /testforblock %s 4 %s water *', xHolder, zHolder), {auto:true,type:"chain",conditional:false});
				smelt.addCommandBlock(util.format('/scoreboard players add @e[tag=SM_isSelected] SM_bV %s', power), {auto:true,type:"chain",conditional:true});

			}
		}

		smelt.addCommandBlock(util.format('/fill %s 4 %s %s 4 %s barrier 0', startX, startZ, endX, endZ), {auto:true,type:"chain",conditional:false});
	}
}

module.exports = EncodeSector;
