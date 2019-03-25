/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

***************************************************************************************/


describe ('spec_AddNewTask', function () {
	
	var loginPage = require('../03.Pages/loginPage.js');
	var logoutFunction = require('../03.Pages/LogOutPage.js');
	var addNewTask = require ('../03.Pages/AddNewTasks.js');
	var taskname = "Task1"+(new Date().getMilliseconds());
	var taskname2 = "Task2"+(new Date().getMilliseconds());
	
	var testdata = require('../04.InputData/Login_InputData.json');
		testdata.forEach(function(data){
			
			//login function
			beforeEach(function(){
				loginPage.newLogin(data.URL, data.username, data.password);
			});
			
			//logout function
			afterEach(function(){
				logoutFunction.newLogOut();
			});
			
			it ('Add new task', function (){
				addNewTask.newTask(taskname);
				
			});
			
			
			
			
			
		}); //close testdata
	
});
	