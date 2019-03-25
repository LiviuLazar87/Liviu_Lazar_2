/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

Comentarii: 
				

***************************************************************************************/

module.exports = (function (cautJobsButton) {
	
		cautJobsButton.JobsButton = function (URL){
			
			
		//---------------------------PART 1 -> JOBS BUTTON--------------------------------//
			
		//open page
		browser.get(URL);
		
		//scroll page
		cautJobsButton.scrollElemFinderIntoView(cautJobsButton.jobsButton) ;
		browser.sleep(5000);
		
		//click jobs button
		cautJobsButton.jobsButtonClick();
		browser.sleep(5000);
		
		//check login button
		expect (cautJobsButton.rachetaButton()).toBeTruthy();
		
		
		//---------------------------PART 2 -> TOUR BUTTON--------------------------------//
		
		//scroll page
		cautJobsButton.scrollElemFinderIntoView(cautJobsButton.TOURButton) ;
		browser.sleep(1000);
		
		//click jobs button
		cautJobsButton.TOURButtonClick();
		browser.sleep(1000);
		
		//check login button
		expect (cautJobsButton.TOURButtonCheckPoint()).toBeTruthy();
		
		
		//---------------------------PART 3 -> THE DAIRY BUTTON--------------------------------//
		
		//scroll page
		cautJobsButton.scrollElemFinderIntoView(cautJobsButton.DAIRYButton) ;
		browser.sleep(1000);
		
		//click jobs button
		cautJobsButton.DAIRYButtonClick();
		browser.sleep(1000);
		
		//check login button
		expect (cautJobsButton.DAIRYButtonCheckPoint()).toBeTruthy();
				
		//--------------------------------------------------------------------------------------//
		
		
		//---------------------------PART 4 -> TIPS & TRICKS BUTTON--------------------------------//
		
		//scroll page
		cautJobsButton.scrollElemFinderIntoView(cautJobsButton.TIPS_TRIKCS_Button) ;
		browser.sleep(1000);
		
		//click jobs button
		cautJobsButton.TIPS_TRIKCS_ButtonClick();
		browser.sleep(1000);
		
		//check login button
		expect (cautJobsButton.TIPS_TRIKCS_ButtonCheckPoint()).toBeTruthy();		
		
		//--------------------------------------------------------------------------------------//
		
		
		//-----------------------PART 5 -> REMEMBER THE MILK BUTTON------------------------------//
		
		cautJobsButton.REMEMBER_THE_MILK_ButtonClick();
		browser.sleep(1000);
		
		//-----------------------------------------------------------------------------------------//
		};
		
		
		
		//----------------------------------PART 6 -> LOGIN---------------------------------------//
		
		
		cautJobsButton.loginSuccess = function (username, password, email){
			
			
			//click login button
			cautJobsButton.loginButtonClick ();
			
			//fill email or user name
			cautJobsButton.typeUserNameField (username);
			
			//fill password
			cautJobsButton.typePasswordField (password);
			
			//uncheck stay logged in
			cautJobsButton.uncheckStayLoggedIn ();
			
			//click login
			cautJobsButton.clickLogin ();
			browser.ignoreSynchronization = true;
			//browser.waitForAngular();
			browser.sleep(3000);
			//browser.refresh();
			
//			//verify login
//			cautJobsButton.clickSettingsButton ();		
//			expect(loginPage.verifyEmail()).toEqual(email);	
			
			//checkpoint INBOX Button
			expect (cautJobsButton.INBOX_ButtonCheckPoint()).toBeTruthy();
		}; 
		
		//-----------------------------------------------------------------------------------------//
		
		//----------------------------------PART 7 -> LOGOUT---------------------------------------//
		cautJobsButton.LogOut = function(){
			
			//click arrow
			cautJobsButton.clickSettingsButton();
			
			//click logout button
			cautJobsButton.signOutButton();
			
			//check login button
			//expect (cautJobsButton.loginAgainButton()).toBeTruthy();
			
			};
		
			//-----------------------------------------------------------------------------------------//
			
			
	return cautJobsButton;

})(require('../02.Functions/basePageObj.js'));