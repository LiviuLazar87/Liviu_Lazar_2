/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

***************************************************************************************/


describe ('spec_aboutButton', function () {
	
	var butonAbout = require('../03.Pages/AboutButton.js');
	
	var testdata = require('../04.InputData/Login_InputData.json');
		testdata.forEach(function(data){
			
			
			it ('Apasa pe butonul About', function (){
				butonAbout.AboutButton(data.URL);
				
			});
			
		}); //close testdata
	
});
	