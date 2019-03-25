/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

***************************************************************************************/

module.exports = (function () {
	
	var that = {};
	
	//---------------------------------Login Part---------------------------------------------//
	
	//Login butoon
	that.loginButtonClick = function (){
		return element (by.xpath('/html/body/nav/div/ul[2]/li[5]/a')).click();
	};
	
	//username field 
	that.typeUserNameField = function (username) {
			element (by.id("username")).clear();
		return element (by.id("username")).sendKeys(username);
		//return $('[id="username"]').sendKeys(username);
	};
	
	//password field
	that.typePasswordField = function (password) {
			element (by.id("password")).clear();
		return element (by.id("password")).sendKeys(password);
	};
	
	//uncheck
	that.uncheckStayLoggedIn = function () {
		return $('[for="remember"]').click();
	};
	
	//click login
	that.clickLogin = function () {
		return element (by.id("login-button")).click();
	};
	
	//-----------------------------------------------------------------------------------//
	
	//----------------------------------LogOut Part------------------------------------//
	
	//click on arrow button to expand
	that.clickSettingsButton = function () {
		return element (by.xpath('/html/body/div[11]/div/div[3]/div[2]/div[3]/div/div[4]/i[2]')).click();
	};						///html/body/div[11]/div/div[3]/div[2]/div[3]/div/div[4]/i[2]
	
	//get text from email address field
	that.verifyEmail = function () {
		return element (by.xpath('//*[@id=":27"]/div[3]')).getText();
	};
	
	//sign-out button
	that.signOutButton = function(){
		return element(by.xpath('//*[@id=":2n"]/div')).click();
		
	};
	
	//check login again button
	that.loginAgainButton = function (){
		return element (by.xpath('/html/body/main/header/div/a')).isPresent();
	};
	
	/*//account settings button
	that.settingsButton = function (){
		return element (by.xpath('//*[@id=":2f"]/div[1]')).click();
	};*/
	
	//-----------------------------------------------------------------------------------------------//
	
	//----------------------------------------Add Task New-------------------------------------------//
	
	//add task field
	that.fillNewTaskField = function(taskname){
		element(by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/div[1]/div[2]/div')).clear();
		return element(by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/div[1]/div[2]/div')).sendKeys(taskname);
	};
	
	//click add task
	that.addTaskButtonClick = function(){
		return element(by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/button')).click();
	};
	
	//---------------------------------------------------------------------------------------------//
	
	//-------------------------------Scroll & Click pe butonul About----------------------------------//
	
	
	//scroll function
	that.scrollElemFinderIntoView = function (elemFinder){
		var promise = browser.executeScript(function(elem){
			elem.scrollIntoView(false);
		},elemFinder);
		return promise;
	};

	//about button
	that.aboutButton = element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[2]/a'));
	
	//about button click
	that.aboutButtonClick = function(){
		return element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[2]/a')).click();
	};
	
	//-------------------------------------------------------------------------------------------------//
	
	
	//-----------------------------Scroll & Click Jobs Button--------------------------------------------//
	
	//jobs Button
	that.jobsButton = element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a'));
	
	//about button click
	that.jobsButtonClick = function(){
		return element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a')).click();
	};
	
	//--------------------------------------Check Racheta for Jobs------------------------------------------//
	
	that.rachetaButton = function (){
		return element (by.xpath('/html/body/main/header/div')).isPresent();
	};
	
	//-----------------------------------------------------------------------------------------------------//
	
	
	
	
	
	
	
	
	
	//-----------------------------------TOUR Button & CheckPoint-----------------------------------------//
	
	//TOUR button

	that.TOURButton = element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[2]/li[2]/a'));
	
	//TOUR button click
	
	that.TOURButtonClick = function(){
		return element(by.xpath('/html/body/footer/div/div[2]/div[1]/ul[2]/li[2]/a')).click();
	};
	

	//CHECKPOINT
	
	that.TOURButtonCheckPoint = function (){
		return element (by.xpath('/html/body/main/header/div/a/h1')).isPresent();
	};
	//----------------------------------------------------------------------------------------------------------//
	
	
	//-----------------------------------THE DAIRY Button & CheckPoint-----------------------------------------//
	
	
	//DAIRY button

	that.DAIRYButton = element(by.xpath('/html/body/footer/div/div[2]/div[2]/ul[1]/li[4]/a'));
	
	//DAIRY button click
	
	that.DAIRYButtonClick = function(){
		return element(by.xpath('/html/body/footer/div/div[2]/div[2]/ul[1]/li[4]/a')).click();
	};
	

	//CHECKPOINT
	
	that.DAIRYButtonCheckPoint = function (){
		return element (by.xpath('/html/body/main/header/div/a/h1')).isPresent();
	};
	
	//----------------------------------------------------------------------------------------------------------//
	
	
	//-----------------------------------TIPS & TRICKS Button & CheckPoint-----------------------------------------//
	
	//TIPS & TRICKS  button

	that.TIPS_TRIKCS_Button = element(by.xpath('/html/body/footer/div/div[2]/div[2]/ul[2]/li[4]/a'));
	
	//TIPS & TRICKS button click
	
	that.TIPS_TRIKCS_ButtonClick = function(){
		return element(by.xpath('/html/body/footer/div/div[2]/div[2]/ul[2]/li[4]/a')).click();
	};
	

	//CHECKPOINT
	
	that.TIPS_TRIKCS_ButtonCheckPoint = function (){
		return element (by.xpath('/html/body/main/section/article/h2[1]')).isPresent();
	};	
	
	//----------------------------------------------------------------------------------------------------------//
	
	//REMEMBER THE MILK button click
	
	that.REMEMBER_THE_MILK_ButtonClick = function(){
		return element(by.xpath('/html/body/nav/div/a')).click();
	};
	
	//--------------------------------------INBOX BUTTON CHECKPOINT---------------------------------------------//
	that.INBOX_ButtonCheckPoint = function (){
		return element (by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[1]/div[5]/div[2]/div[1]')).isPresent();
	};	
	//----------------------------------------------------------------------------------------------------------//
	
	
	
	return that;
	
})();