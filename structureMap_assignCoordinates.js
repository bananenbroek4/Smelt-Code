var StructureMap_AssignCoordinates =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var startX				=	smelt.args[0];
			startZ				=	smelt.args[1];
			endX				=	smelt.args[2];
			endZ				=	smelt.args[3];

		var startY				= smelt.args[4];
			endY				= smelt.args[5];

		function findDifference(start, end)
		{
			if(start < end){var difference = end - start;}
			else{var difference = start - end;}
			return Math.sqrt(Math.pow(difference,2));
		}

		var differenceX 		= findDifference(startX, endX);
		var differenceZ 		= findDifference(startZ, endZ);
		var differenceY			= findDifference(startY, endY);

		/*
		function isOdd(input)
		{
			if(input % 2 == 1) {return true;}
			else {return false;}
		}
		*/
		for (var i = 0; i <= differenceX; i++)
		{
			smelt.addCommandBlock(util.format('/scoreboard players set @e[tag=SM_StructureMarker,x=%s,y=%s,z=%s,dx=0,dy=%s,dz=%s] SM_X %s', (i- -startX), startY, startZ, differenceY, differenceZ, i), {type:"chain",auto:true});
		}

		for (var i = 0; i <= differenceZ; i++)
		{
			smelt.addCommandBlock(util.format('/scoreboard players set @e[tag=SM_StructureMarker,x=%s,y=%s,z=%s,dx=%s,dy=%s,dz=0] SM_Z %s', startX, startY, (i- -startZ), differenceX, differenceY, i), {type:"chain",auto:true});
		}

	}
}
module.exports = StructureMap_AssignCoordinates;