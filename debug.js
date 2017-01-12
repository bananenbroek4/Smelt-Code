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
			var message = message.replace(/_/g, ' ');
			smelt.addCommandBlock("/tellraw @a [{\"text\":\"" + message + "\"}]", {conditional:'true',type:'chain',auto:true});
		}
	}
}

module.exports = Event_Plus;