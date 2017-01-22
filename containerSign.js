// ----------------------
// --   containerSign  --
// ----------------------
// Usage: !containerSign <startX> <startY> <startZ> <relX> <relY> <relZ> <text1> <text2> <text3> <text4>

var containerSign =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var startX 	= 	smelt.args[0]-2;
			startY 	= 	smelt.args[1]-1;
			startZ 	= 	smelt.args[2];

			relX	=	smelt.args[3];
			relY	=	smelt.args[4];
			relZ	=	smelt.args[5];

			facing	= 	smelt.args[6];
		
			text1	=	smelt.args[7];
			text2	=	smelt.args[8];
			text3	=	smelt.args[9];
			text4	=	smelt.args[10];

			distX	=	-smelt.getCurrentCommandBlock().x - -startX - -relX;
			distY	=	-smelt.getCurrentCommandBlock().y - -startY - -relY;
			distZ	=	-smelt.getCurrentCommandBlock().z - -startZ - -relZ;

		if(text1)
		{
			var text1 = text1.replace(/%20/g, ' ');
		}
		else {
			var text1 = '{\\\"text\\\":\\\"\\\"}';
		}
		if(text2)
		{
			var text2 = text2.replace(/%20/g, ' ');
		}
		else {
			var text2 = '{\\\"text\\\":\\\"\\\"}';
		}
		if(text3)
		{
			var text3 = text3.replace(/%20/g, ' ');
		}
		else {
			var text3 = '{\\\"text\\\":\\\"\\\"}';
		}
		if(text4)
		{
			var text4 = text4.replace(/%20/g, ' ');
		}
		else {
			var text4 = '{\\\"text\\\":\\\"\\\"}';
		}

		smelt.addCommandBlock(util.format('/setblock ~%s ~%s ~%s wall_sign %s replace {Text1:"%s",Text2:"%s",Text3:"%s",Text4:"%s"}', distX, distY, distZ, facing, text1, text2, text3, text4),{type:"chain",auto:true});

	}
}
module.exports = containerSign;