// ----------------------
// --      debug       --
// ----------------------
// Usage: !debug <message>
			


var Event_Plus =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var message = smelt.args[0];
		if(message)
		{	
			smelt.addCommandBlock("/tellraw @a [{\"text\":\"" + message + "\"}]", {conditional:'true',type:'impulse',auto:false});
		}
	}
}

module.exports = Event_Plus;