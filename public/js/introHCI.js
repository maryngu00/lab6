'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})



$(a).onclick = function() {
	e.preventDefault();


}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	$.get("http://URL", callBackFn)
	$(a).onclick = function() {
		e.preventDefault();
	}
	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get('/project/' + idNumber, function(result) {

		var projectInfo = '<img src="' + result['image'] + '" class="detailsImage"><p>' + result['title'] + '</p><p><small>' + result['date'] + '</small></p>';

		$('#project' + idNumber + '  .details').html(projectInfo + result.summary);
	});

}

function addProject(result) {
	var projectHTML = '<a href="#" class="thumbnail">' +
	  '<img src="' + result['image'] + '" class="img">' +
	  '<p>' + result['title'] + '</p>' +
	  '<p><small>' + result['date'] +
	  '</small></p></a>'; 
  }

  
function callbackFunction(result) {
	console.log(result);
}
