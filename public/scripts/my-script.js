$(function () {
	$.get('/message')
		.done(function (data) {
			$('#title').text(data);
		})
		.fail(function (error) {
			$('#title').text('O_o');
		});
});
