// -----------------------------
// --		  rng  			  --
// -----------------------------
// Usage: !rng <identifier> <min> <max (exclude)>

var rng = {};

rng.Execute = function(smelt)
{
	
	var util = require("util");

	var rngID = smelt.args[0];
	var minValue = smelt.args[1];
	var maxValue = smelt.args[2];

	var minLoop1 = smelt.args[1];
	var minLoop2 = smelt.args[1];

	smelt.addCommandBlock("/scoreboard objectives add RNG_" + rngID + " dummy");
	smelt.addInitCommand("/scoreboard objectives add RNG_Holder dummy");

	var masterCommand = "/summon area_effect_cloud ~ ~ ~ {CustomName:\"AEC_RNG_HOLDER\",Passengers:[%s],Duration:1}";
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
	

	smelt.addCommandBlock("/scoreboard players tag @r[name=RNG_" + rngID + ",tag=RNG_AEC,type=area_effect_cloud] add chooseRNG");
	smelt.addCommandBlock("/scoreboard players operation RNG" + rngID + " RNG_Holder = @e[name=RNG_" + rngID + ",tag=chooseRNG,type=area_effect_cloud] RNG_" + rngID);
	smelt.addCommandBlock("/scoreboard players tag @e[name=RNG_" + rngID + ",tag=chooseRNG,type=area_effect_cloud] remove chooseRNG");
	smelt.addCommandBlock("/scoreboard objectives remove RNG_" + rngID);

};
module.exports = rng;