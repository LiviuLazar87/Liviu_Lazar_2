/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

***************************************************************************************/


describe('spec_SignOutScript', function(){
	
	var loginPage = require('../03.Pages/loginPage.js');
	var logoutFunction = require('../03.Pages/LogOutPage.js');
	var testdata = require('../04.InputData/Login_InputData.json');
		testdata.forEach(function(data){
			it('logout', function(){
				loginPage.loginSuccess(data.URL, data.username, data.password, data.username);
				logoutFunction.signOutFunction();
			});
		}); //close testdata
});
