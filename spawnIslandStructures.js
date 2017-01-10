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
	var startChunkX = middleChunkX - 15;
	var startChunkZ = middleChunkZ - 15;
	var endChunkX = middleChunkX - -15;
	var endChunkZ = middleChunkZ - -15;

	smelt.addCommandBlock("/execute @r[type=armor_stand,tag=StructureMapMarker] ~ ~ ~ /scoreboard players tag @e[tag=!spawnedInStructure,r=1,c=1,type=armor_stand] add spawnInStructure");
	smelt.addCommandBlock("/summon armor_stand ~ ~ ~ {CustomName:\"StructureMarker\",Tags:[\"setStructureData\"],NoGravity:1,Marker:0,Small:1}", {"conditional":true});


	var currentChunkX = startChunkX;
	for(var i = 0; i <= 31; i++)
	{
		smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,tag=spawnInStructure,score_xPos_min=%s,score_xPos=%s] ~ ~ ~ /tp @e[name=StructureMarker,tag=setStructureData] %s ~ ~", i, i, (currentChunkX * 16)), {"conditional":false});
		currentChunkX += 1;
	}

	var currentChunkZ = startChunkZ;
	for(var i = 0; i <= 31; i++)
	{
		smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,tag=spawnInStructure,score_zPos_min=%s,score_zPos=%s] ~ ~ ~ /tp @e[name=StructureMarker,tag=setStructureData] ~ ~ %s", i, i, (currentChunkZ * 16)));
		currentChunkZ += 1;
	}

	for(var i = 0; i <= 10; i++)
	{
		smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,tag=spawnInStructure,score_yPos_min=%s,score_yPos=%s] ~ ~ ~ /tp @e[name=StructureMarker,tag=setStructureData] ~ %s ~", i, i, i * 16));
	}
	
	smelt.addCommandBlock("/execute @e[tag=spawnInStructure,name=Marker_LargeIsland] ~ ~ ~ /scoreboard players tag @e[tag=setStructureData,name=StructureMarker] add Structure_LargeIsland");
	smelt.addCommandBlock("/execute @e[tag=spawnInStructure,name=Marker_SmallIsland] ~ ~ ~ /scoreboard players tag @e[tag=setStructureData,name=StructureMarker] add Structure_SmallIsland");

	smelt.addCommandBlock("/scoreboard players tag @e[name=StructureMarker,tag=setStructureData] remove setStructureData");


	smelt.addCommandBlock("/scoreboard players tag @e[tag=spawnInStructure] add spawnedInStructure");
	smelt.addCommandBlock("/scoreboard players tag @e[tag=spawnInStructure] remove spawnInStructure");
};
module.exports = spawnIslandStructures;