'use strict'

$(document).ready(function () {
	
	$(document).on("click", "#done", function (e) { 
		e.preventDefault();
		let nsow = moment();
		let log = (nsow.format('dddd, MMMM DD YYYY, h:mm:ss'));
		let comment = $("#textarea").val ();
		let name = $("#people").val ();
		$('#people').val('');
		$('#textarea').val('');
		$('<div class="comment"> <p>' + name + '</p> <p>' + comment + '</p> <div>' + log + '</div>  <br>  <button id="edit">edit</button> <button id="delete">delete</button  </div>').appendTo("#comments")


		
		// $('<div>' + log + '</div>' ).appendTo('.comment')
	});

	$(document).on('click', '#edit', function () {
		$('body').append('<div id="modal"></div>')
		$('form').clone().appendTo('#modal')



		$(document).on('click', 'form').submit(function (e) {
			alert('d')
			e.preventDefault();
		}) 
		$(document).on('click', '#modal', function () {
		$("#modal").remove();   
		})
		

	})

	$(document).on('click', '#delete', function () {
		$(this).parent().remove();
		return false;
	})
})





