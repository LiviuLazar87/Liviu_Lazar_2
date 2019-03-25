/***************************************************************************************

Created by: Liviu Lazar

Descriptions: 

Comentarii: aici ne scriem pasii ce vrem sa facem
				

***************************************************************************************/

module.exports = (function (cautAboutButton) {
	
		cautAboutButton.AboutButton = function (URL){
			
		//open page
		browser.get(URL);
		
		//scroll page
		cautAboutButton.scrollElemFinderIntoView(cautAboutButton.aboutButton) ;
		browser.sleep(5000);
		
		//click about button
		cautAboutButton.aboutButtonClick();
		browser.sleep(5000);
			
	};
	
	return cautAboutButton;

})(require('../02.Functions/basePageObj.js'));