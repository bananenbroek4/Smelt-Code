// ------------------------
// --     start_event+   --
// ------------------------
// Usage: !start_event+ <eventName>


var StopLoop_Plus =
{
	Execute : function(smelt)
	{
		
		var name = smelt.args[0];
		smelt.addCommandBlock("/execute @e[name=Loop_" + name + ",type=area_effect_cloud] ~ ~ ~ /blockdata ~ ~ ~ {auto:0b}", {type:"chain",auto:true});
		
	}
}
module.exports = StopLoop_Plus;