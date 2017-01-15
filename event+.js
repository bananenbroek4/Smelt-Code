// ----------------------
// --     event+     --
// ----------------------
// Usage: !event+ <eventName>

/*	
			
*/

var Event_Plus =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var name = smelt.args[0];
		if(name)
		{	
			var entityName = util.format("Event_%s", name);

			var event_Location_X	= smelt.getCurrentCommandBlock().x;
			var event_Location_Y	= smelt.getCurrentCommandBlock().y;
			var event_Location_Z	= smelt.getCurrentCommandBlock().z;

			smelt.addCommandBlock('', {type:'impulse',auto:false});
			smelt.addInitCommand(util.format('/kill @e[type=area_effect_cloud,name=%s,c=1,tag=!SpawnedIn]',entityName));
			var summonCommand = String.raw`summon area_effect_cloud ~${event_Location_X} ~${event_Location_Y-1} ~${event_Location_Z} {Duration:2147483647,CustomName:"${entityName}",Tags:["SpawnedIn","eventloop+"]}`;
			smelt.addInitCommand(summonCommand);
		}
	}
}

module.exports = Event_Plus;
