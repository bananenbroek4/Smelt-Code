// ----------------------
// --  moduleContainer --
// ----------------------
// Usage: !moduleContainer <startX> <startY> <startZ> <endX> <endY> <endZ> <outline> <data> <wall> <data>


var moduleContainer =
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

			outline		= 	smelt.args[6];
			outlineData = 	smelt.args[7];
			wall 		= 	smelt.args[8];
			wallData 	= 	smelt.args[9];
		
			moduleStartX	=	-smelt.getCurrentCommandBlock().x - -startX;
			moduleStartY	=	-smelt.getCurrentCommandBlock().y - -startY;
			moduleStartZ	=	-smelt.getCurrentCommandBlock().z - -startZ;

			moduleEndX	=	-smelt.getCurrentCommandBlock().x - -endX;
			moduleEndY	=	-smelt.getCurrentCommandBlock().y - -endY;
			moduleEndZ	=	-smelt.getCurrentCommandBlock().z - -endZ;

		smelt.addCommandBlock(util.format("/fill ~%s ~%s ~%s ~%s ~%s ~%s %s %s replace air", moduleStartX, moduleStartY, moduleStartZ, moduleEndX, moduleEndY, moduleEndZ, outline, outlineData),{auto:true,type:"chain"});
		var	moduleStartX	=	-smelt.getCurrentCommandBlock().x - -startX;
			moduleStartY	=	-smelt.getCurrentCommandBlock().y - -startY;
			moduleStartZ	=	-smelt.getCurrentCommandBlock().z - -startZ;

			moduleEndX	=	-smelt.getCurrentCommandBlock().x - -endX;
			moduleEndY	=	-smelt.getCurrentCommandBlock().y - -endY;
			moduleEndZ	=	-smelt.getCurrentCommandBlock().z - -endZ;

		smelt.addCommandBlock(util.format("/fill ~%s ~%s ~%s ~%s ~%s ~%s %s %s replace iron_block", moduleStartX+1, moduleStartY+1, moduleStartZ, moduleEndX-1, moduleEndY-1, moduleEndZ, wall, wallData),{auto:true,type:"chain"});

		var	moduleStartX	=	-smelt.getCurrentCommandBlock().x - -startX;
			moduleStartY	=	-smelt.getCurrentCommandBlock().y - -startY;
			moduleStartZ	=	-smelt.getCurrentCommandBlock().z - -startZ;

			moduleEndX	=	-smelt.getCurrentCommandBlock().x - -endX;
			moduleEndY	=	-smelt.getCurrentCommandBlock().y - -endY;
			moduleEndZ	=	-smelt.getCurrentCommandBlock().z - -endZ;

		smelt.addCommandBlock(util.format("/fill ~%s ~%s ~%s ~%s ~%s ~%s %s %s replace iron_block", moduleStartX, moduleStartY+1, moduleStartZ+1, moduleEndX, moduleEndY-1, moduleEndZ-1, wall, wallData),{auto:true,type:"chain"});
		/*
		*/

	}
}
module.exports = moduleContainer;