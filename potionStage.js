// -----------------------
// -- potionStage --
// -----------------------
// Usage: !potionStage <newStage> <oldStage> <ingredient> <sound> <source> <volume> <pitch> <cC> <brewCooldown> <Explosions tag (use fireworks generator)>

var PotionStage =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var	newStage = 		smelt.args[0];
			oldStage = 		smelt.args[1];
			ingredient = 	smelt.args[2];
			itemDamage = 	smelt.args[3] + "s";
			sound =			smelt.args[4];
			source =			smelt.args[5];
			volume =		smelt.args[6];
			pitch =			smelt.args[7];
			cauldronColor = smelt.args[8];
			brewCooldown = 	smelt.args[9];
			ExplosionStr = 	smelt.args[10];

			//, {type:"chain",auto:true}
		//smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,type=area_effect_cloud,tag=cpp_%s,score_cppCL_min=1] ~ ~ ~ /execute @e[name=cpp_cB,type=area_effect_cloud,tag=cpp_hasHeat,score_cppCL_min=1,score_cppBC=0] ~ ~ ~ /testfor @e[type=item,dx=0,dy=1,dz=0] {Item:{id:\"minecraft:%s\",Count:1b,Damage:%s}}", oldStage, ingredient, itemDamage), {type:"chain",auto:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,type=area_effect_cloud,tag=cpp_%s,score_cppCL_min=1] ~ ~ ~ /scoreboard players tag @e[type=item,dx=0,dy=1,dz=0] add cpp_%s%s {Item:{id:\"minecraft:%s\",Count:1b,Damage:%s}}", oldStage, ingredient, itemDamage, ingredient, itemDamage), {type:"chain",auto:true,conditional:false});
		if(ExplosionStr) {
			smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,type=area_effect_cloud,tag=cpp_%s,score_cppCL_min=1] ~ ~1 ~ /execute @e[type=item,tag=cpp_%s%s,c=1,r=2] ~ ~-1 ~ /execute @e[name=cpp_cB,c=1,r=2] ~ ~.5 ~ /summon minecraft:fireworks_rocket ~ ~ ~ {LifeTime:0,FireworksItem:{id:\"minecraft:fireworks\",Count:1b,tag:{Fireworks:{Explosions:%s}}},Silent:1b}", oldStage, ingredient, itemDamage, ExplosionStr), {type:"chain",auto:true,conditional:true});
		}
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s,score_cppCL_min=1] ~ ~1 ~ /execute @e[type=item,tag=cpp_%s%s,c=1,r=2] ~ ~-1 ~ /scoreboard players set @e[name=cpp_cB,c=1,r=2,score_cppCL_min=1,tag=cpp_%s] cppCC %s", oldStage, ingredient, itemDamage, oldStage, cauldronColor), {type:"chain",auto:true,conditional:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s] ~ ~1 ~ /execute @e[type=item,tag=cpp_%s%s,c=1,r=2] ~ ~-1 ~ /scoreboard players tag @e[name=cpp_cB,c=1,r=2,tag=cpp_%s] add cpp_colorUpdate", oldStage, ingredient, itemDamage, oldStage), {type:"chain",auto:true,conditional:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s,score_cppCL_min=1] ~ ~1 ~ /execute @e[type=item,tag=cpp_%s%s,c=1,r=2] ~ ~-1 ~ /playsound %s %s @a ~ ~ ~ %s %s", oldStage, ingredient, itemDamage, sound, source, volume, pitch), {type:"chain",auto:true,conditional:false});
		smelt.addCommandBlock("searge", {type:"chain",conditional:false});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s] ~-1 ~ ~-1 /execute @e[type=item,tag=cpp_%s%s,dx=2,dy=2,dz=2] ~ ~ ~ /scoreboard players tag @e[name=cpp_cB,c=1,r=2,tag=cpp_%s] add cpp_%s", oldStage, ingredient, itemDamage, oldStage, newStage), {type:"chain",auto:true,conditional:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s] ~-1 ~ ~-1 /execute @e[type=item,tag=cpp_%s%s,dx=2,dy=2,dz=2] ~ ~ ~ /scoreboard players tag @e[name=cpp_cB,c=1,r=2,tag=cpp_%s] remove cpp_%s", oldStage, ingredient, itemDamage, oldStage, oldStage), {type:"chain",auto:true,conditional:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s] ~-1 ~ ~-1 /execute @e[type=item,tag=cpp_%s%s,dx=2,dy=2,dz=2] ~ ~ ~ /scoreboard players set @e[name=cpp_cB,c=1,r=2] cppBC %s", newStage, ingredient, itemDamage, brewCooldown), {type:"chain",auto:true,conditional:true});
		smelt.addCommandBlock(util.format("/execute @e[name=cpp_cB,tag=cpp_%s] ~-1 ~ ~-1 /kill @e[tag=cpp_%s%s,type=item,dx=2,dy=2,dz=2]", newStage, ingredient, itemDamage), {type:"chain",auto:true,conditional:true});
	}
}

module.exports = PotionStage;