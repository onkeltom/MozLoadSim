var cohort = jsPsych.currentTrial().data.version;

var launch_funcs = {
  '1': () => {
    setTimeout(function() {
        $('#l1').addClass('active');
        $('#w1').css({'opacity': '1'});
		$('#t1').css({'opacity': '1'});
		$('#s1').css({'opacity': '1'});
        setTimeout(function() {
            $('#search').css({'opacity': '1'})
            setTimeout(function() {
                $('#tops').css({'opacity': '1'})
	            setTimeout(function() {
	                $('#po').css({'opacity': '1'})
	                setTimeout(function() {
	                  $('#active-game').addClass('end');
	                  setTimeout(function() {
	                    $('#end-trial').click();
	                    $('#active-game').removeClass('end');
	                  }, 500);
	                }, 2000);
				}, jsPsych.currentTrial().data.delay[3]);
			}, 	jsPsych.currentTrial().data.delay[2]);
       }, jsPsych.currentTrial().data.delay[1]);
    }, jsPsych.currentTrial().data.delay[0]);
  },
  '2': () => {
    setTimeout(function() {
        $('#l1').addClass('active');
        $('#w1').css({'opacity': '1'});
		$('#t1').css({'opacity': '1'});
		$('#s1').css({'opacity': '1'});
        setTimeout(function() {
            $('#w1').css({'opacity': '1'});
            $('#s1').css({'opacity': '1'});
            $('#t1').css({'opacity': '1'});
            setTimeout(function() {
              $('#active-game').addClass('end');
              setTimeout(function() {
                $('#end-trial').click();
                $('#active-game').removeClass('end');
              }, 500);
            }, 2000);
        }, jsPsych.currentTrial().data.delay[2]);
    }, 200);
  }
}

$('#l1').on('click', launch_funcs[cohort]);
$('.desktop-icon').on('click', launch_funcs[cohort]);