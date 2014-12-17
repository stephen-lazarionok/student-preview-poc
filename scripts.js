// Launches the container in a student preview mode.
function showStudentPreview() {

    // Resolves the container URL and populates it with input parameters
    function resolveContainerURL() {
        var resultURL = 'http://ls-qastaging.mheducation.com/flow/flowjs.html?name=container';

        // TODO : get and pass the necessary input parameters
        resultURL += "&sectionId=" + $('#in_section_id').val();
        resultURL += "&insructorId=" + $('#in_instructor_id').val();
        resultURL += "&sessionId=" + $('#in_session_id').val();

        return resultURL;
    }

    function showFrameOverlay(url) {
        var overlay = jQuery('<div id="overlay">' +
        '<h1 class="labelMode">Student preview mode</h1><button class="btnClose" onclick="removeOverlay()">Close</button>' +
        '<iframe id="student_preview_frame" class="frame" src="' + containerURL + '"></iframe>' +
        // This label could be removed. It just shows the iframe URL
        '<h3 class="urlLabel" id="url_label">blank</h3>' +
        '</div>');

        overlay.appendTo(document.body);    
    }

    var containerURL = resolveContainerURL();    
    showFrameOverlay(containerURL);    

    // to remove. this code shows the proper iframe URL 
    var frameURL = $('#student_preview_frame').attr('src');
    document.getElementById('url_label').innerHTML = frameURL;
}

function removeOverlay() {
    $("#overlay").remove();
}