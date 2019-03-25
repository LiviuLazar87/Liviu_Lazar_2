/***************************************************************************************

Created by: Oana FLORESCU

Descriptions: 

***************************************************************************************/


module.exports = ('logout',function(logoutFunction){

	logoutFunction.signOutFunction = function (){
		
		//click arrow
		//logoutFunction.clickSettingsButton();
		
		//click logout button
		logoutFunction.signOutButton();
		
		//check login button
		expect (logoutFunction.loginAgainButton()).toBeTruthy();
		};
		
		//--------------------------------------------------------------//
	
		logoutFunction.newLogOut = function(){
			
			//click arrow
			logoutFunction.clickSettingsButton();
			
			//click logout button
			logoutFunction.signOutButton();
			
			//check login button
			expect (logoutFunction.loginAgainButton()).toBeTruthy();
			};
		//-------------------------------------------------------------//
		
	
	return logoutFunction;	
	
})(require('../02.Functions/basePageObj.js'));
