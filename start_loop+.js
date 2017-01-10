// ------------------------
// --     start_event   --
// ------------------------
// Usage: !start_event <eventName>


var StartLoop_Plus =
{
	Execute : function(smelt)
	{
		
		var name = smelt.args[0];
		smelt.addCommandBlock("/execute @e[name=plugin_LoopMarker_" + name + ",type=area_effect_cloud] ~ ~ ~ /blockdata ~ ~ ~ {auto:1b}", {type:"chain",auto:true});
		
	}
}
module.exports = StartLoop_Plus;