$(document).ready(function() {
    function getSpeakerData(title) {
        var jsonFileName = 'json_files/' + title + ".json";
        $.ajax({
            url: 'http://localhost:8000/' + jsonFileName,
            dataType: 'json',
            success: function(data) {
                $('main').empty();
                var speakers = data.speakers[0];
       
                var speakerHtml = '<h1>' + speakers.title + '</h1>';
                console.log('Speaker Title:', speakers.speakers);
                speakerHtml += '<img src="' + speakers.image + '">';
                speakerHtml += '<h2>' + speakers.month + '<br>' + speakers.speaker + '</h2>';
                speakerHtml += '<p>' + speakers.text + '</p>';

                $('main').append(speakerHtml);
            },
            error: function() {
                console.error('Error');
            }
        });
    }

    $('#nav_list a').on('click', function(event) {
        event.preventDefault();
        var title = $(this).attr('title');    
        getSpeakerData(title);
    });
	
}); // end ready