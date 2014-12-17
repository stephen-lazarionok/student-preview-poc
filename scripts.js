function showStudentPreview() {

    var baseURL = 'http://ls-qastaging.mheducation.com/flow/flowjs.html?name=container';
    baseURL += "&sectionId=" + $('#in_section_id').val();


    var overlay = jQuery('<div id="overlay">' +
        '<h1 class="labelMode">Student preview mode</h1><button class="btnClose" onclick="removeOverlay()">Close</button>' +
        '<iframe id="student_preview_frame" class="frame" src="' + baseURL + '"></iframe>' +
        '<h3 class="urlLabel" id="url_label">12312312</h3>' +
        '</div>');

    overlay.appendTo(document.body);

    var frameURL = $('#student_preview_frame').attr('src');
    document.getElementById('url_label').innerHTML = frameURL;
}

function removeOverlay() {
    $("#overlay").remove();
}