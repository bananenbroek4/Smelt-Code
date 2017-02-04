// ----------------------
// --   invertResult   --
// ----------------------
// Usage: !invertResult

/*	
			
*/

var Event_Plus =
{
	Execute : function(smelt)
	{
		var util = require('util');

		var test_Location_X		= smelt.getPreviousCommandBlock().x;
		var test_Location_Y		= smelt.getPreviousCommandBlock().y;
		var test_Location_Z		= smelt.getPreviousCommandBlock().z;
		var test_CBType 		= smelt.getPreviousCommandBlock().type;
		var test_CBCondition 		= smelt.getPreviousCommandBlock().conditional;

		if(test_CBCondition) {
			var conditionalState = true
		}

		var result_Location_X	= smelt.getCurrentCommandBlock().x;
		var result_Location_Y	= smelt.getCurrentCommandBlock().y;
		var result_Location_Z	= smelt.getCurrentCommandBlock().z;

		var difference_Location_X = test_Location_X - result_Location_X;
		var difference_Location_Y = test_Location_Y - result_Location_Y;
		var difference_Location_Z = test_Location_Z - result_Location_Z;

		smelt.addCommandBlock(util.format('/testforblock ~%s ~%s ~%s %s_command_block * {SuccessCount:0}',difference_Location_X, difference_Location_Y, difference_Location_Z, test_CBType), {type:'chain',auto:true,conditional:conditionalState});
	}
}

module.exports = Event_Plus;