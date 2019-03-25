/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

***************************************************************************************/

//browser.ignoreSynchronization = true;
module.exports = (function (loginPage) {
	
	//--------------------------------------------------------------------//
	loginPage.loginSuccess = function (URL, username, password, email){
		
		//load page
		browser.get (URL);
		
		//click login button
		loginPage.loginButtonClick ();
		
		//fill email or user name
		loginPage.typeUserNameField (username);
		
		//fill password
		loginPage.typePasswordField (password);
		
		//uncheck stay logged in
		loginPage.uncheckStayLoggedIn ();
		
		//click login
		loginPage.clickLogin ();
		browser.ignoreSynchronization = true;
		//browser.waitForAngular();
		browser.sleep(3000);
		//browser.refresh();
		
		//verify login
		loginPage.clickSettingsButton ();		
		expect(loginPage.verifyEmail()).toEqual(email);
		
		
	}; //end function loginSuccess
	//--------------------------------------------------------------------//
	
	
	
	//--------------------------------------------------------------------//
	loginPage.loginNoSuccess = function (URL, username, password){
		
		//load page
		browser.get (URL);
		
		//click login button
		loginPage.loginButtonClick ();
		
		//fill email or user name
		loginPage.typeUserNameField (username);
		
		//fill password
		loginPage.typePasswordField (password);
		
		//uncheck stay logged in
		loginPage.uncheckStayLoggedIn ();
			
	};
	//--------------------------------------------------------------------//
	
	
	loginPage.newLogin = function (URL,username,password){
		
		//load page
		browser.get (URL);
		
		//click login button
		loginPage.loginButtonClick ();
		
		//fill email or user name
		loginPage.typeUserNameField (username);
		
		//fill password
		loginPage.typePasswordField (password);
		
		//uncheck stay logged in
		loginPage.uncheckStayLoggedIn ();
		
		//click login
		loginPage.clickLogin ();
		browser.ignoreSynchronization = true;
		browser.sleep(3000);

	};
	//-------------------------------------------------------//
	
	return loginPage;
	
})(require('../02.Functions/basePageObj.js'));