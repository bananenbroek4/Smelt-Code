// ----------------------
// --     stop_loop     --
// ----------------------
// Usage: !stop_loop <loopName>

var Loop = require("./loop.js");

var StopLoop = {}

StopLoop.Install = Loop.Install;

StopLoop.Execute = function(smelt)
{
	var name = smelt.args[0];
	if(name)
	{
		smelt.addCommandBlock("/scoreboard players tag @e[type=armor_stand,name=OC-SYSTEM] remove loop_" + name);
	}
};

module.exports = StopLoop;