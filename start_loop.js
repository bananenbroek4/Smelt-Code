// ----------------------
// --     start_loop     --
// ----------------------
// Usage: !start_loop <loopName>

var Loop = require("./loop.js");

var StartLoop = {}

StartLoop.Install = Loop.Install;

StartLoop.Execute = function(smelt)
{
	var name = smelt.args[0];
	if(name)
	{
		smelt.addCommandBlock("/scoreboard players tag @e[type=armor_stand,name=OC-SYSTEM] add loop_" + name);
	}
};

module.exports = StartLoop;