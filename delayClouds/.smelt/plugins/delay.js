//- - - - - - - - - - - - - - - - Delay plugin by VexSpectre - - - - - - - - - - - - - - - -
//
// Usage: !delay [delayDuration] <cmdBlockType> "<command>""
//
//		[delayDuration]: Delay duration in game ticks
//		<cmdBlockType>: Case sensitive. Type of Command Block that's going to execute the command
//						(impulse - repeating - chain)
//  	"<command>": Command to execute after the delay. Keep the quotation marks.
//
// Example: !delay 60 impulse "/say 3 Seconds of delay, wow!"

var delay= {};

delay.Execute = function(smelt)
{
	if (smelt.args[0]>2)
	{
		var getFacing		= smelt.getCurrentCommandBlock().direction, 	//used to detect wich direction the command blocks are being placed.
			delay 			= smelt.args[0],
			nextBlockType	= smelt.args[1],	//defines wich type of Command Block will execute the command.
			command 		= smelt.args.slice(2).join(" ").slice(1,-1),
			facing			= 0,	//defines the position to summon the AEC
			aecType			= 0;	//defines the format for the Entity Name of the AEC (depends of the Output version)

		//Facing
		switch(getFacing)
		{
			case "north":
					facing = "~ ~ ~-1";
					break;
			case "east":
					facing = "~1 ~ ~";
					break;
			case "south":
					facing = "~ ~ ~1";
					break;
			case "west":
					facing = "~-1 ~ ~";
					break;
		}
		
		//AEC Entity Name format
		if(smelt.settings.Output.MinecraftVersion=="1.11")
		{
			aecType = "minecraft:area_effect_cloud"; //1.11 Format
		}else
		{
			aecType = "area_effect_cloud"; //1.9 Format
		}

		//AEC Summoner Command Block
		//	Display delay duration as name:
		//	smelt.addCommandBlock('/summon ' + aecType + ' ' + facing + ' {CustomName:"'+ delay +' ticks delay",CustomNameVisible:true,Tags:["dCloud"],Age:-' + delay + '}');
		
		smelt.addCommandBlock('/summon ' + aecType + ' ' + facing + ' {Tags:["dCloud"],Age:-' + delay + '}');

		//"Command to execute" Block
		switch(nextBlockType)
		{
			case "impulse":
				smelt.addCommandBlock(command,{"auto":false,"type":"impulse"});
				break;
			case "chain":		
				smelt.addCommandBlock(command,{"auto":false,"type":"chain"});
				break;
			case "repeating":		
				smelt.addCommandBlock(command,{"auto":false,"type":"repeating"});
				break;
		}
	}
}
module.exports = delay;