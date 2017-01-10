// -----------------------------
// --		  sM to mM  	  --
// -----------------------------
// Usage: !sMD <x1> <y1> <z1> <x2> <y2> <z2> <x3> <y3> <z3> <x4> <y4> <z4>

var sMD = {};

var util = require("util");

sMD.Execute = function(smelt)
{
	var SM_xDistance = smelt.args[0] - smelt.args[3];
	if(SM_xDistance<0)
	{
		var SM_xDistance = SM_xDistance * -1;
	}
	var SM_yDistance = smelt.args[1] - smelt.args[4];
	if(SM_yDistance<0)
	{
		var SM_yDistance = SM_yDistance * -1;
	}
	var SM_zDistance = smelt.args[2] - smelt.args[5];
	if(SM_zDistance<0)
	{
		var SM_zDistance = SM_zDistance * -1;
	}
	
	var currentX = smelt.args[0];
	var currentY = smelt.args[1];
	var currentZ = smelt.args[2];
	var finalX = smelt.args[3];
	var finalY = smelt.args[4];
	var finalZ = smelt.args[5];

	for(var i = 0; i <= SM_xDistance; i++)
	{
		var currentX = smelt.args[0];
		if(currentX < finalX)
		{
			var currentX = currentX - i;
			smelt.addCommandBlock(util.format("/scoreboard players set @e[tag=StructureMapMarker,type=armor_stand,x=%d,y=%s,z=%s,dz=%s,dy=%s,dx=0] xPos %d", currentX, currentY, currentZ, SM_zDistance, SM_yDistance, i));
		}
		if(currentX > finalX)
		{
			var currentX = currentX - -i;
			smelt.addCommandBlock(util.format("/scoreboard players set @e[tag=StructureMapMarker,type=armor_stand,x=%d,y=%s,z=%s,dz=%s,dy=%s,dx=0] xPos %d", currentX, currentY, currentZ, SM_zDistance, SM_yDistance, i));
		}
	}

	var currentX = smelt.args[0];
	var currentY = smelt.args[1];
	var currentZ = smelt.args[2];
	var finalX = smelt.args[3];
	var finalY = smelt.args[4];
	var finalZ = smelt.args[5];
	
	for(var i = 0; i <= SM_yDistance; i++)
	{
		var currentY = currentY - -i;
		smelt.addCommandBlock(util.format("/scoreboard players set @e[tag=StructureMapMarker,type=armor_stand,x=%d,y=%s,z=%s,dx=%s,dy=1,dz=%s] yPos %d", currentX, currentY, currentZ, SM_xDistance, SM_zDistance, i));
	}

	var currentX = smelt.args[0];
	var currentY = smelt.args[1];
	var currentZ = smelt.args[2];
	var finalX = smelt.args[3];
	var finalY = smelt.args[4];
	var finalZ = smelt.args[5];

	for(var i = 0; i <= SM_zDistance; i++)
	{
		var currentZ = smelt.args[2];
		if(currentZ < finalZ)
		{
			var currentZ = currentZ - -i;
			smelt.addCommandBlock(util.format("/scoreboard players set @e[tag=StructureMapMarker,type=armor_stand,x=%d,y=%s,z=%s,dx=%s,dy=%s,dz=0] zPos %d", currentX, currentY, currentZ, SM_xDistance, SM_yDistance, i));
		}
		if(currentZ > finalZ)
		{
			var currentZ = currentZ - i;
			smelt.addCommandBlock(util.format("/scoreboard players set @e[tag=StructureMapMarker,type=armor_stand,x=%d,y=%s,z=%s,dx=%s,dy=%s,dz=0] zPos %d", currentX, currentY, currentZ, SM_xDistance, SM_yDistance, i));
		}
	}
/*
	var MM_xDistance = smelt.args[6] - smelt.args[9];
	if(MM_xDistance<0)
	{
		var MM_xDistance = MM_xDistance * -1;
	}
	var MM_yDistance = smelt.args[7] - smelt.args[10];
	if(MM_yDistance<0)
	{
		var MM_yDistance = MM_yDistance * -1;
	}
	var MM_zDistance = smelt.args[8] - smelt.args[11];
	if(MM_zDistance<0)
	{
		var MM_zDistance = MM_zDistance * -1;	
	}

	var MM_currentX = smelt.args[6];
	var MM_currentY = smelt.args[7];
	var MM_currentZ = smelt.args[8];
	var MM_finalX = smelt.args[9];
	var MM_finalY = smelt.args[10];
	var MM_finalZ = smelt.args[11];

	var MM_xScaleDivision = MM_xDistance/(SM_xDistance+1);

	for(var i = 0; i*MM_xScaleDivision < MM_xDistance; i++)
	{
		if (i > 0)
		{
			var MM_currentX = MM_currentX - -MM_xScaleDivision;
		}
		smelt.addCommandBlock(util.format("/execute @e[tag=chosen_SMM,type=armor_stand,score_xPos_min=%d,score_xPos=%d] ~ ~ ~ /summon armor_stand %s %s %s {CustomName:\"MM_Marker\",CustomNameVisible:1,Tags:[\"MM_Marker\",\"largeIsland\",\"setPosition\"],Marker:1,Small:1,NoGravity:1}", i, i, MM_currentX, MM_currentY, MM_currentZ));
	}

	var MM_currentX = smelt.args[6];

	var MM_yScaleDivision = MM_yDistance/(SM_yDistance+1);
	for(var i = 0; i*MM_yScaleDivision < MM_yDistance; i++)
	{
		if (i > 0)
		{
			var MM_currentY = MM_currentY - -MM_yScaleDivision;
		}
		smelt.addCommandBlock(util.format("/execute @e[tag=chosen_SMM,type=armor_stand,score_yPos_min=%d,score_yPos=%d] ~ ~ ~ /tp @e[type=armor_stand,name=MM_Marker,tag=setPosition] ~ %s ~", i, i, MM_currentY));
	}

	var MM_currentY = smelt.args[7];

	var MM_zScaleDivision = MM_zDistance/(SM_zDistance+1);
	for(var i = 0; i*MM_zScaleDivision < MM_zDistance; i++)
	{
		if (i > 0)
		{
			var MM_currentZ = MM_currentZ - -MM_zScaleDivision;
		}
		smelt.addCommandBlock(util.format("/execute @e[tag=chosen_SMM,type=armor_stand,score_zPos_min=%d,score_zPos=%d] ~ ~ ~ /tp @e[type=armor_stand,name=MM_Marker,tag=setPosition] ~ ~ %s", i, i, MM_currentZ));
	}

	var MM_currentZ = smelt.args[8];
*/
};
module.exports = sMD;