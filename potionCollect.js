// -----------------------
// -- potionStage --
// -----------------------
// Usage: 
//> ROOT: !potionCollect <oldStage> <ingredient> <ingredientDamage> <consumptionCondition> <ingredientType>
// IF <ingredientType> = item
//> !potionCollect <oldStage> <ingredient> <ingredientDamage> <consumptionCondition> <ingredientType> <tags> <sound> <volume> <pitch> <resultItemTags>
// ELSE IF <ingredientType> != item, assume potion is resulting item
// !potionCollect <oldStage> <ingredient> <ingredientDamage> <consumptionCondition> <ingredientType> <resultItemTags>



var PotionCollect =
{
	Execute : function(smelt)
	{
		var util = require('util');

		/*
		*/
		var	oldStage = 				smelt.args[0];
			ingredient = 			smelt.args[1];
			ingredientDamage = 		smelt.args[2];
			consumptionCondition = 	smelt.args[3];
			ingredientType = 		smelt.args[4];

		if(ingredientType=="item") {
		var	tags = 					smelt.args[5];
			sound =					smelt.args[6];
			source = 				"ambient";
			volume = 				smelt.args[7];
			pitch =					smelt.args[8];
			resultItemTags = 		smelt.args[9];
		}
		else {
		var resultItemTags = 		smelt.args[5];
			sound = "item.bottle.fill";
			source = "ambient";
			volume = "0.4";
			pitch = "1.5";
		}

		if(consumptionCondition=="1") {
			var waterLevelCommand = "1";
			var teleportCommand = "-0.25";
		}
		else {
			var waterLevelCommand = "3";
			var teleportCommand = "-0.75";
		}
	
		
		// Ingredient
		//smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s,score_cppCL_min=1] ~ ~ ~ /execute @e[name=cpp_cB,tag=cpp_hasHeat,score_cppCL_min=1,score_cppBC=0] ~-2 ~ ~-2 /testfor @e[type=item,dx=2,dy=2,dz=2] {Item:{id:\"minecraft:%s\",Count:1b,Damage:%ss}}", oldStage, ingredient, ingredientDamage), {type:"chain",auto:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s,score_cppCL_min=1] ~-1 ~ ~-1 /scoreboard players tag @e[type=item,dx=2,dy=2,dz=20] add cpp_%s%s {Item:{id:\"minecraft:%s\",Count:1b,Damage:%ss}}", oldStage, ingredient, ingredientDamage, ingredient, ingredientDamage), {type:"chain",auto:true,conditional:false});

		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s,score_cppCL_min=1] ~ ~1 ~ /execute @e[type=item,tag=cpp_%s%s,c=1,r=2] ~ ~-1 ~ /playsound %s %s @a ~ ~ ~ %s %s", oldStage, ingredient, ingredientDamage, sound, source, volume, pitch), {type:"chain",auto:true,conditional:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s,score_cppCL_min=1] ~-1 ~ ~-1 /execute @e[type=item,tag=cpp_%s%s,dx=2,dy=2,dz=2] ~ ~-1 ~ /scoreboard players remove @e[name=cpp_cB,c=1,r=2,tag=cpp_%s,score_cppCL_min=1] cppCL %s", oldStage, ingredient, ingredientDamage, oldStage, waterLevelCommand), {type:"chain",auto:true,conditional:false});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s,score_cppCL_min=0] ~ ~1 ~ /execute @e[type=item,tag=cpp_%s%s,c=1,r=2] ~ ~-1 ~ /execute @e[name=cpp_cB,r=2,c=1] ~ ~-2 ~ /tp @e[name=cpp_cC,dy=3] ~ ~%s ~", oldStage, ingredient, ingredientDamage, teleportCommand), {type:"chain",auto:true,conditional:true});

		var resultItemCommand = util.format("/execute @e[name=cpp_cB,tag=cpp_%s,score_cppCL_min=0] ~-1 ~ ~-1 /execute @e[type=item,tag=cpp_%s%s,dx=2,dy=2,dz=2] ~ ~-1 ~ /execute @e[name=cpp_cB,r=2,c=1] ~ ~ ~ /summon item ~ ~1 ~ %s", oldStage, ingredient, ingredientDamage, resultItemTags);
		var resultItemCommand = resultItemCommand.replace(/%20/g, ' ');

		smelt.addCommandBlock(resultItemCommand, {type:"chain", auto:true,conditional:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s] ~-1 ~ ~-1 /kill @e[tag=cpp_%s%s,type=item,dx=2,dy=2,dz=2]", oldStage, ingredient, ingredientDamage), {type:"chain", auto:true,conditional:true});
		
	}
}

module.exports = PotionCollect;