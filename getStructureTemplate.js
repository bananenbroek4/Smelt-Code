var getStructureTemplate = {};

var util = require("util");

getStructureTemplate.Execute = function(smelt)
{
	var structureName = smelt.args[0];
	var structureChunkLength = smelt.args[1];
	//var structureBlockLength = structureChunkLength*2;

	smelt.addCommandBlock(util.format("/execute @e[name=StructureMarker,tag=Structure_%s,score_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /scoreboard players set @r[type=armor_stand,name=StructureTemplateHolder,tag=%s] structureQueue 1", structureName, structureName));

	var cloneToX = smelt.args[2]- -1;
	var cloneToY = smelt.args[3];
	var cloneToZ = smelt.args[4]- -1;
	var cloneOverlayToX = (cloneToX - -(structureChunkLength*16));

	// Structure Template
	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureTemplateHolder,tag=%s,score_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /clone ~1 ~ ~1 ~%d ~30 ~%d %d %d %d", structureName, ((structureChunkLength*16)-1), ((structureChunkLength*16)-1), cloneToX, cloneToY, cloneToZ));
	// Structure Overlay
	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureTemplateHolder,tag=%s,sore_structureQueue_min=1,score_structureQueue=1] ~%d ~ ~ /clone ~1 ~ ~1 ~%d ~30 ~%d %d %d %d", structureName, (structureChunkLength*16), ((structureChunkLength * 16) - 1), ((structureChunkLength * 16)-1), cloneOverlayToX, cloneToY, cloneToZ));
	// Load Overlay
	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureTemplateHolder,tag=%s,sore_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /setblock %d %d %d redstone_block 0", structureName, cloneOverlayToX-1, cloneToY- -1, cloneToZ-1));
	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureTemplateHolder,tag=%s,sore_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /setblock %d %d %d air 0", structureName, cloneOverlayToX-1, cloneToY- -1, cloneToZ-1));
	// Merge Overlay with Template-1
	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureTemplateHolder,tag=%s,sore_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /setblock %d %d %d redstone_block 0", structureName, cloneToX-1, cloneToY, cloneToZ-1));
	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureTemplateHolder,tag=%s,sore_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /setblock %d %d %d air 0", structureName, cloneToX-1, cloneToY, cloneToZ-1));

	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureMarker,tag=Structure_%s,score_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /setblock ~ ~ ~ structure_block 1 replace {mirror:\"NONE\",ignoreEntities:1b,rotation:\"NONE\",posX:0,posY:0,posZ:0,mode:\"LOAD\",name:\"%s_Structure\"}", structureName, structureName));
	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureMarker,tag=Structure_%s,score_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /setblock ~ ~1 ~ redstone_block 0", structureName));

	smelt.addCommandBlock(util.format("/execute @e[type=armor_stand,name=StructureMarker,tag=Structure_%s,score_structureQueue_min=1,score_structureQueue=1] ~ ~ ~ /summon area_effect_cloud ~ ~ ~ {CustomName:\"IslandCenter\",Duration:999999999,Tags:[%s]}", structureName, structureName));
};
module.exports = getStructureTemplate;