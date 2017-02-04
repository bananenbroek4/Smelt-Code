// ------------------------
// --     start_event   --
// ------------------------
// Usage: !start_event <eventName>


var StartEvent_Plus =
{
	Execute : function(smelt)
	{
		
		var name = smelt.args[0];
		smelt.addCommandBlock("/execute @e[name=Event_" + name + ",type=area_effect_cloud] ~ ~ ~ /blockdata ~ ~ ~ {auto:1b}", {conditional:true,type:"chain",auto:true});
		smelt.addCommandBlock("/execute @e[name=Event_" + name + ",type=area_effect_cloud] ~ ~ ~ /blockdata ~ ~ ~ {auto:0b}", {conditional:true,type:"chain",auto:true});
		
	}
}
module.exports = StartEvent_Plus;