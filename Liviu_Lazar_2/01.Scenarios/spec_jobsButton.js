/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

***************************************************************************************/


describe ('spec_jobsButton', function () {
	
	var loginPage = require ('../03.Pages/jobsButton.js');
	
	var butonJobs = require('../03.Pages/jobsButton.js');
	
	var logoutFunction = require('../03.Pages/jobsButton.js');
	
	var testdata = require('../04.InputData/Login_InputData.json');
		testdata.forEach(function(data){
			
			
			it ('Apasa pe butonul Jobs', function (){
				butonJobs.JobsButton(data.URL);
				
			
			});
			
			
			it ('Login succesfully', function (){
				
				loginPage.loginSuccess (data.username, data.password, data.username);
				console.log ("Logarea s-a efectutat cu succes")
			
			}); //close it
			
			it('Logout succesfully', function(){
				logoutFunction.LogOut();
				console.log ("V-ati de-logat cu succes")
				
			});//close it
			
		}); //close testdata
	
});
	