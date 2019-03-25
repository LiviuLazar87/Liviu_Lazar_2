/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

Comentarii: aici ne scriem pasii ce vrem sa facem
				

***************************************************************************************/

module.exports = (function (addNewTask) {
	
	addNewTask.newTask = function (taskname){
		
		//verify number of tasks
		
		//fill field
		addNewTask.fillNewTaskField (taskname) ;
		browser.sleep(10000);
		
		//click add Task
		addNewTask.addTaskButtonClick();
		browser.sleep(10000);
		
		//verify task
		
		
		
	};
	
	
	return addNewTask;
	
	
	
	
})(require('../02.Functions/basePageObj.js'));