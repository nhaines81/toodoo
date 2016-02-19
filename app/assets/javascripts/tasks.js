// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function ready () {
	console.log('document is ready');
	var form = $('#new_task');
	// console.dir(form);


	form.on('ajax:complete', newTask)

	function newTask(){
		console.log('newTask fired');
		// window.location.reload();
		window.location.reload();
	}
}


$(document).on('ready page:load', ready)

$(docuent).on("ready", ready);

function ready() {
	$('#new_task').on('ajax:success', newTask);

	function newTask() {
		window.location.reload();
	}
}

function newTask() {
	console.log(arguments);
}

function newTask(event, data) {
	$('body').append(data);
}

$('#tasks').append(data);
$('task_name').val('');

$(document).on("ready page:load", ready);