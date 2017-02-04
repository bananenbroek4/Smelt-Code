var sM2mM = {};

var util = require("util");

sM2mM.Execute = function(smelt)
{
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


	var MM_xScaleDivision = MM_xDistance/(SM_xDistance+1);

	for(var i = 0; i*MM_xScaleDivision < MM_xDistance; i++)
	{
		if (i > 0)
		{
			var MM_currentX = MM_currentX - -MM_xScaleDivision;
		}
		smelt.addCommandBlock(util.format("/execute @e[tag=chosen_SMM,type=area_effect_cloud,score_SM_X_min=%d,score_SM_X=%d] ~ ~ ~ /summon armor_stand %s %s %s {CustomName:\"MM_Marker\",CustomNameVisible:0,Tags:[\"MM_Marker\",\"setPosition\",\"identify_MMMarker\"],Marker:1,Small:1,NoGravity:1,Invisible:1,Silent:1b}", i, i, MM_currentX, MM_currentY, MM_currentZ));
	}
	
	var MM_currentX = smelt.args[6];

	var MM_yScaleDivision = MM_yDistance/(SM_yDistance+1);
	for(var i = 0; i*MM_yScaleDivision < MM_yDistance; i++)
	{
		if (i > 0)
		{
			var MM_currentY = MM_currentY - -MM_yScaleDivision;
		}
		smelt.addCommandBlock(util.format("/execute @e[tag=chosen_SMM,type=area_effect_cloud,score_SM_Height_min=%d,score_SM_Height=%d] ~ ~ ~ /tp @e[type=armor_stand,name=MM_Marker,tag=setPosition] ~ %s ~", i, i, MM_currentY));
	}

	var MM_currentY = smelt.args[7];

	var MM_zScaleDivision = MM_zDistance/(SM_zDistance+1);
	for(var i = 0; i*MM_zScaleDivision < MM_zDistance; i++)
	{
		if (i > 0)
		{
			var MM_currentZ = MM_currentZ - -MM_zScaleDivision;
		}
		smelt.addCommandBlock(util.format("/execute @e[tag=chosen_SMM,type=area_effect_cloud,score_SM_Z_min=%d,score_SM_Z=%d] ~ ~ ~ /tp @e[type=armor_stand,name=MM_Marker,tag=setPosition] ~ ~ %s", i, i, MM_currentZ));
	}

	var MM_currentZ = smelt.args[8];

};
module.exports = sM2mM;