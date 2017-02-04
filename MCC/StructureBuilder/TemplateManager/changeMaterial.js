// ----------------------
// --   changeMaterial --
// ----------------------
// Usage: !containerSign <startX> <startY> <startZ> <startRelX> <startRelY> <startRelZ> <endRelX> <endRelY> <endRelZ> <materialPlace> <dataPlace> <materialReplace>

var changeMaterial =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var startX 	= 	smelt.args[0]-2;
			startY 	= 	smelt.args[1]-1;
			startZ 	= 	smelt.args[2];

			startRelX	=	smelt.args[3];
			startRelY	=	smelt.args[4];
			startRelZ	=	smelt.args[5];

			endRelX	=	smelt.args[6];
			endRelY	=	smelt.args[7];
			endRelZ	=	smelt.args[8];

			startDistX	=	-smelt.getCurrentCommandBlock().x - -startX - -startRelX;
			startDistY	=	-smelt.getCurrentCommandBlock().y - -startY - -startRelY;
			startDistZ	=	-smelt.getCurrentCommandBlock().z - -startZ - -startRelZ;

			endDistX	=	-smelt.getCurrentCommandBlock().x - -startX - -endRelX;
			endDistY	=	-smelt.getCurrentCommandBlock().y - -startY - -endRelY;
			endDistZ	=	-smelt.getCurrentCommandBlock().z - -startZ - -endRelZ;

			materialPlace = smelt.args[9];
			materialData = smelt.args[10];
			materialReplace = smelt.args[11];


		smelt.addCommandBlock(util.format('/fill ~%s ~%s ~%s ~%s ~%s ~%s %s %s replace %s *', startDistX, startDistY, startDistZ, endDistX, endDistY, endDistZ, materialPlace, materialData, materialReplace),{type:"chain",auto:true});

	}
}
module.exports = changeMaterial;