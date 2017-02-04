// -------------------------------
// --mapGeneration_CreateMarkers--
// -------------------------------
// Usage: !mapGeneration_CreateMarkers <startX> <startZ> <endX> <endZ> <chunkStartX> <chunkStartZ> <chunkEndX> <chunkEndZ>

var MapGeneration_CreateMarkers =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var startX				=	smelt.args[0];
			startZ				=	smelt.args[1];
			endX				=	smelt.args[2];
			endZ				=	smelt.args[3];

			chunkStartX			=	smelt.args[4];
			chunkStartZ			=	smelt.args[5];
			chunkEndX			=	smelt.args[6];
			chunkEndZ			=	smelt.args[7];

		function findDifference(start,end)
		{
			if(start < end) {var differenceX = end - start;}
			else {var differenceX = start - end;}
			return difference;
		}

		var differenceX 		= findDifference(startX,endX);
		var differenceZ 		= findDifference(startZ,endZ);
		var differenceChunkX 	= findDifference(chunkStartX,chunkEndX);
		var differenceChunkZ 	= findDifference(chunkStartZ,chunkEndZ);

		function isOdd(input)
		{
			if(input % 2 == 1) {return true;}
			else {return false;}
		}

		function SM_to_GM(input)
		{
			if(isOdd(input)==true){var computeAmount = floor(input/2)*2;}
			else {var computeAmount = floor(input/2)*2;}

			if(isOdd(input)==true){var leapAmount = floor(input/2);}
			else {var leapAmount = floor(input/2);}


		}

	}

}
module.exports = MapGeneration_CreateMarkers;