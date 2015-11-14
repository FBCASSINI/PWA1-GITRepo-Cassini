/*

Flavio Cassini
10/31/2015
Class 1511
Instructor Garlic
Assignment Goal 3 DEBUG
PWA-O
 */



// Create privatized scope using a self-executing function
(function(){ // anonymous function

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),//needs semicolon, instead of coma. variable resultsdiv
		searchInput = document.forms[0].search //Missing a "var" before search input. needs semi coloin instead of comma, variable search input
		currentSearch = ''//missing "var" before currentSearch needs semi colon at the end, Currentsearch may not be needed
		; //This semi clon can be used for the line above

	// Validates search query
	var validqte = function(query){ //needs only one "=" sign, variable validqte.

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){ //while loop to trim whitespace
			query = query.substring(1, query.length);
		}; // unnecessary semi colon
		while(query.charAt(query.length-1) === "") {//while loop to trim white space
			query = query.substring(0, query.length - 1);
		}; //needs bracket } to close  while loop. unnecessary semi colon

		// Check search length, must have 3 characters
		if(query.length < 3){ //if query.length is greater then 3 call alertbox
			alert("Your search query is too small, try again."); //needs ending quatation after try again. //alert phrase

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
			//returns out of the function
		}; //unnecessary semi colon

		search(query);

	};
	// Finds search matches
	var search = function(query) { //Needs bracket } varriable search

		// split the user's search query string into an array
		var queryArray = query.split(" ");   //variable queryArray splits assigning query join

		// array to store matched results from database.js
		var results = []; //variable array to to match reults from database.js

		// loop through each index of db array
		for(var i= 0, j=db.length; i<j; i++) { // for loop is i<j if not +1 loop

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); //seperates the video items by a | pipe
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); //saves var dbitem to lowercase

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) { //for loop to throgh query search words , 11<jj loop keep looping until a match.
				var qitem = queryArray[ii].toLowerCase();

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //variable compare to find any search term matches
				if (compare !== -1) {
					results.push(db[i]);
				}
				; //unnecessary semi colon
			}
			;  //Needs } to close the loop // unnecessary semi colon
		}; //needs bracket } to close the loop // unnecessary semi colon


		results.sort();

		// Check that matches were found, and run output functions
		if(results.length === 0){ //if no mtach jump to var no match
			noMatch();
		}else{
			showMatches(results); //else show matches
		}; //unnecessary semi colon
	}; // unnecessary semi colon

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){// var nomatch prints out term
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';//Semi colon is in wrong place needs to be in front of try and after idea.

		resultsDIV.innerHTML = html;
	}; //unnecessary semi colon

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){//var showmatches puts matches into a page with anchors

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',//var html, title, url. print out results
			title,
			url
			;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ //for loop i<j loop again until a match

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //title of video ends with pipe
			title = results[i].substring(0, titleEnd);

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);//pull the video after the title using "|" pipe

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //Make video link using concatination
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
		var query = searchInput.value;
		validqte(query);

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;

	}
}());
