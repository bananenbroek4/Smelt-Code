// -----------------------------
// --		  sM to mM  	  --
// -----------------------------
// Usage: !sMD <x1> <y1> <z1> <x2> <y2> <z2> <x3> <y3> <z3> <x4> <y4> <z4>

var spawnIslandStructures = {};

var util = require("util");

spawnIslandStructures.Execute = function(smelt)
{
	var middleChunkX = smelt.args[0];
	var middleChunkZ = smelt.args[1];
	var startChunkX = middleChunkX - 10;
	var startChunkZ = middleChunkZ - 10;
	var endChunkX = middleChunkX - -10;
	var endChunkZ = middleChunkZ - -10;

	smelt.addCommandBlock("/scoreboard players tag @r[type=area_effect_cloud,tag=GM_SpawnMarker] add spawnInStructure");
	smelt.addCommandBlock("/summon area_effect_cloud ~ ~ ~ {CustomName:\"MG_Marker\",Tags:[\"setStructureData\"],Duration:2147483647}", {"conditional":true});


	var currentChunkX = startChunkX;
	for(var i = 0; i <= 20; i++)
	{
		smelt.addCommandBlock(util.format("/execute @e[type=area_effect_cloud,tag=spawnInStructure,score_SM_X_min=%s,score_SM_X=%s] ~ ~ ~ /tp @e[name=MG_Marker,tag=setStructureData] %s ~ ~", i, i, (currentChunkX * 16)), {"conditional":false});
		currentChunkX += 1;
	}

	var currentChunkZ = startChunkZ;
	for(var i = 0; i <= 20; i++)
	{
		smelt.addCommandBlock(util.format("/execute @e[type=area_effect_cloud,tag=spawnInStructure,score_SM_Z_min=%s,score_SM_Z=%s] ~ ~ ~ /tp @e[name=MG_Marker,tag=setStructureData] ~ ~ %s", i, i, (currentChunkZ * 16)));
		currentChunkZ += 1;
	}

	for(var i = 0; i <= 10; i++)
	{
		smelt.addCommandBlock(util.format("/execute @e[type=area_effect_cloud,tag=spawnInStructure,score_SM_Height_min=%s,score_SM_Height=%s] ~ ~ ~ /tp @e[name=MG_Marker,tag=setStructureData] ~ %s ~", i, i, i * 8));
	}
	
	smelt.addCommandBlock("/execute @e[tag=spawnInStructure,name=SM_LI] ~ ~ ~ /scoreboard players tag @e[tag=setStructureData,name=MG_Marker] add MG_LI");
	smelt.addCommandBlock("/execute @e[tag=spawnInStructure,name=SM_SI] ~ ~ ~ /scoreboard players tag @e[tag=setStructureData,name=MG_Marker] add MG_SI");
	smelt.addCommandBlock("/execute @e[tag=spawnInStructure,name=SM_BCP] ~ ~ ~ /scoreboard players tag @e[tag=setStructureData,name=MG_Marker] add MG_BCP");
	smelt.addCommandBlock("/execute @e[tag=spawnInStructure,name=SM_C] ~ ~ ~ /scoreboard players tag @e[tag=setStructureData,name=MG_Marker] add MG_C");

	smelt.addCommandBlock("/scoreboard players tag @e[name=MG_Marker,tag=setStructureData] remove setStructureData");


	smelt.addCommandBlock("/scoreboard players tag @e[tag=spawnInStructure] add spawnedInStructure");
	smelt.addCommandBlock("/scoreboard players tag @e[tag=spawnInStructure] remove GM_SpawnMarker");
	smelt.addCommandBlock("/scoreboard players tag @e[tag=spawnInStructure] remove spawnInStructure");
};
module.exports = spawnIslandStructures;