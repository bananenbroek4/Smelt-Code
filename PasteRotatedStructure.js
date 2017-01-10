// -----------------------------
// --  PasteRotatedStructure  --
// -----------------------------
// Usage: !PasteRotatedStructure <x1> <y1> <z1> <x2> <y2> <z2> <SMx> <SMy> <SMz> <StructureName> <conditional | true / false>

var PasteRotatedStructure = {};

PasteRotatedStructure.Execute = function(smelt)
{
	
	var util = require("util");

	var bottomCornerX = smelt.args[0];
	var bottomCornerY = smelt.args[1];
	var bottomCornerZ = smelt.args[2];
	var topCornerX = smelt.args[3];
	var topCornerY = smelt.args[4];
	var topCornerZ = smelt.args[5];

	var StructureModuleX = smelt.args[6];
	var StructureModuleY = smelt.args[7];
	var StructureModuleZ = smelt.args[8];

	var StructureName = smelt.args[9];

	var isConditional = smelt.args[10];

	var distanceToStructureX = bottomCornerX - StructureModuleX;
	var distanceToStructureY = bottomCornerY - StructureModuleY;
	var distanceToStructureZ = bottomCornerZ - StructureModuleZ;


	if(bottomCornerX < topCornerX) {
		var distanceX = bottomCornerX - topCornerX + 1;
	} else {
		var distanceX = topCornerX - bottomCornerX + 1;
	} /* else {
		var distanceX = 0;
	} */

	if(bottomCornerY < topCornerY) {
		var distanceY = bottomCornerY - topCornerY + 1;
	} else {
		var distanceY = topCornerY - bottomCornerY + 1;
	} /* else {
		var distanceY = 0;
	} */

	if(bottomCornerZ < topCornerZ) {
		var distanceZ = bottomCornerZ - topCornerZ + 1;
	} else {
		var distanceZ = topCornerZ - bottomCornerZ + 1;
	} /* else {
		var distanceZ = 0;
	} */

	

	// Setblock | Save For Rotation
	smelt.addInitCommand(util.format("/setblock %s %s %s structure_block 0 replace {name:\"%s_SaveForRotation\",mode:\"SAVE\",sizeX:%s,sizeY:%s,sizeZ:%s,posX:%s,posY:%s,posZ:%s,rotation:\"NONE\"}", StructureModuleX, StructureModuleY, StructureModuleZ, StructureName, distanceX, distanceY, distanceZ, distanceToStructureX, distanceToStructureY, distanceToStructureZ));
	// Setblock | Load Rotated Structure
	smelt.addInitCommand(util.format("/setblock %s %s %s structure_block 0 replace {name:\"%s_SaveForRotation\",mode:\"LOAD\",posX:%s,posY:%s,posZ:%s,rotation:\"NONE\"}", StructureModuleX - 1, StructureModuleY - -1, StructureModuleZ, StructureName, distanceToStructureX - -1, distanceToStructureY - 1, distanceToStructureZ));
	// Setblock | Save Final
	//smelt.addInitCommand(util.format("/setblock %s %s %s structure_block 0 replace {name:\"%s\",mode:\"SAVE\",sizeX:%s,sizeY:%s,sizeZ:%s,posX:%s,posY:%s,posZ:%s,rotation:\"NONE\"}", StructureModuleX, StructureModuleY - -2, StructureModuleZ, StructureName, distanceX, distanceY, distanceZ, distanceToStructureX, distanceToStructureY - 2, distanceToStructureZ));


	// Pick random rotation value | rng plugin
	var rngID = StructureName;
	var minValue = 0;
	var maxValue = 4;

	var minLoop1 = 0;
	var minLoop2 = 0;

	smelt.addInitCommand("/scoreboard objectives add RNG_" + rngID + " dummy");
	smelt.addInitCommand("/scoreboard objectives add RNG_Holder dummy");

	var masterCommand = "/summon area_effect_cloud ~ ~ ~ {CustomName:\"AEC_RNG_HOLDER\",Passengers:[%s],Duration:0}";
	var passenger = "{id:\"area_effect_cloud\",Duration:1,CustomName:\"RNG_" + rngID + "\",Tags:[\"RNG_AEC\"]},%s";

	
	while(minLoop1 < maxValue)
	{
		var masterCommand = (util.format(masterCommand, passenger));

		minLoop1++;
	}
	
	smelt.addCommandBlock(masterCommand);
	smelt.addCommandBlock("/scoreboard players set @e[name=RNG_" + rngID + ",tag=RNG_AEC,type=area_effect_cloud] RNG_" + rngID + " 0");
	
	
	while (minLoop2 < maxValue)
	{
		smelt.addCommandBlock("/scoreboard players set @e[c=1,type=area_effect_cloud,tag=RNG_AEC,name=RNG_" + rngID + ",score_RNG_" + rngID + "=0] RNG_" + rngID + " " + minLoop2);
		minLoop2++;
	}

	var subtractDistanceX = distanceX;
	var subtractDistanceY = distanceY;
	var subtractDistanceZ = distanceZ;

	smelt.addCommandBlock("/scoreboard players tag @r[name=RNG_" + rngID + ",tag=RNG_AEC,type=area_effect_cloud] add chooseRNG");
	smelt.addCommandBlock("/scoreboard players operation RNG" + rngID + " RNG_Holder = @e[name=RNG_" + rngID + ",tag=chooseRNG,type=area_effect_cloud] RNG_" + rngID);
	smelt.addCommandBlock("/scoreboard players tag @e[name=RNG_" + rngID + ",tag=chooseRNG,type=area_effect_cloud] remove chooseRNG");

	smelt.addCommandBlock("/kill @e[name=RNG_" + rngID + ",type=area_effect_cloud]")

	smelt.addCommandBlock(util.format("/scoreboard players test RNG%s RNG_Holder 0 0", StructureName),{"conditional":false});
	smelt.addCommandBlock(util.format("/blockdata %s %s %s {rotation:\"CLOCKWISE_90\",posX:%s,posY:%s,posZ:%s,showboundingbox:1b}", StructureModuleX -1, StructureModuleY - -1, StructureModuleZ, distanceToStructureX - -subtractDistanceX, distanceToStructureY - 1, distanceToStructureZ),{conditional:true});

	smelt.addCommandBlock(util.format("/scoreboard players test RNG%s RNG_Holder 1 1", StructureName),{"conditional":false});
	smelt.addCommandBlock(util.format("/blockdata %s %s %s {rotation:\"CLOCKWISE_180\",posX:%s,posY:%s,posZ:%s,showboundingbox:1b}", StructureModuleX -1, StructureModuleY - -1, StructureModuleZ, distanceToStructureX - -subtractDistanceX, distanceToStructureY - 1, distanceToStructureZ - - subtractDistanceZ -1),{conditional:true});

	smelt.addCommandBlock(util.format("/scoreboard players test RNG%s RNG_Holder 2 2", StructureName),{"conditional":false});
	smelt.addCommandBlock(util.format("/blockdata %s %s %s {rotation:\"COUNTERCLOCKWISE_90\",posX:%s,posY:%s,posZ:%s,showboundingbox:1b}", StructureModuleX -1, StructureModuleY - -1, StructureModuleZ, distanceToStructureX - -1, distanceToStructureY - 1, distanceToStructureZ - - subtractDistanceZ - 1),{conditional:true});

	smelt.addCommandBlock(util.format("/scoreboard players test RNG%s RNG_Holder 3 3", StructureName),{"conditional":false});
	smelt.addCommandBlock(util.format("/blockdata %s %s %s {rotation:\"NONE\",posX:%s,posY:%s,posZ:%s,showboundingbox:1b}", StructureModuleX -1, StructureModuleY - -1, StructureModuleZ, distanceToStructureX - -1, distanceToStructureY - 1, distanceToStructureZ),{conditional:true});


};
module.exports = PasteRotatedStructure;