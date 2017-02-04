// ----------------------
// -- entityFromPlayer --
// ----------------------
// Usage: !entityFromPlayer <distance> <x> <y> <particle> <runeID> <phaseID>

/*	
			
*/

//var AECMaxDuration = "2147483647";

var EntityFromPlayer =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var distance = smelt.args[0];
		var xCoordinate = smelt.args[1];
		var yCoordinate = smelt.args[2];

		var particle = smelt.args[3];
		var runeID = smelt.args[4];
		var phaseID = smelt.args[5];

		var startRadian = Math.acos((0.5 * distance)/0.6);
		var startDegree = startRadian * (180 / Math.PI);
		var midDegree = 180 - (2*startDegree);

		var AECSub = "{id:\"area_effect_cloud\",Duration:1}";
		/*
		var command = String.raw'/summon boat ~ ~128 ~ {CustomName:"${phaseID}",Tags:["x_R_E","x_R_KMN"],Passengers:[${AECSub},{id:"area_effect_cloud",Duration:1,Passengers:[${AECSub},{id:"boat",Tags:["x_R_E","x_R_KMN"],Rotation:[${midDegree}f,0f],Passengers:[${AECSub},{id:"area_effect_cloud",Duration:1,Passengers:[${AECSub},{id:"boat",Tags:["x_R_E","x_R_KMN","${runeID}"],CustomName:"${phaseID}"}]}]}]}';
		smelt.addCommandBlock(command,{auto:"false",type:"impulse"});
		smelt.addCommandBlock(String.raw'/tp @e[name=${phaseID},tag=$runeID,type=boat] ~ ~ ~ ~${startDegree} ~',{auto:"true",type:"chain"});
		*/
	}
}

module.exports = EntityFromPlayer