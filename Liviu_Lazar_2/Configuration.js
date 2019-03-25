

var Jasmine2HtmlReporter = require('C:/Users/User1064/eclipse-workspace/Liviu_Lazar_2/node_modules/protractor-jasmine2-screenshot-reporter');
var timeStamp = new Date().getTime();

exports.config = { //fisierul sa fie vizibil in momentul in care este apelat
		
		
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		directConnect: true,
		
		capabilities:{ //multicapabilities = selenium sa ruleze 2 browsere in acealasi timp
			'browserName':'chrome'
		},	
		
		framework: 'jasmine',
		
		onPrepare: function() {
			browser.driver.manage().window().maximize();
			
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'C:/Users/User1064/eclipse-workspace/Liviu_Lazar_2/target/screenshots',
						showSummary: true,
						showQuickLinks: true,
						ShowConfiguration: true ,
						screenshotsFolder: 'images',
						takeScreenshots: true,
						takeScreenshotsOnlyFailures: true,
						fixedScreenshotName: true,
						ignoreSkippedSpecs: true,
						consolidate: true,
						consolidateAll: true,
						preserveDirectory: true,
						fileName: 'Protractor-Execution-Report-' + timeStamp,
						
					})
							
							
			);
			
		},
		
		jasmineNodeOpts:{
			showColors: true,
			isVerbose: true,
			realtimeFailure: true,
			includeStackTrace: true,
			defaultTimeoutInterval: 500000,
						
		},
		
		//specs:['../']
		//specs:['../Liviu_Lazar_2/01.Scenarios/spec_loginScript.js']
		//specs:['../Liviu_Lazar_2/01.Scenarios/spec_SignOutScript.js']
		//specs:['../Liviu_Lazar_2/01.Scenarios/spec_AddNewTask.js']
		//specs:['../Liviu_Lazar_2/01.Scenarios/spec_aboutButton.js']
		//specs:['../']
		//specs:['../']
		//specs:['../']
		//specs:['../']
		
		specs:['../Liviu_Lazar_2/01.Scenarios/spec_jobsButton.js']
		
		
		/*suites:{
			
			suite:[
				'../',
				'..',
			]
					
		},*/
		
		
		
}







