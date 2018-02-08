$(document).ready($ => {
	

	//task1 

	$('#calc1').on('click', () => {
		
		$.post('a1.php', 
		{
			"num1": $('#num1').val(),
			"num2": $('#num2').val()
		}, 
		data => {
			$('.out1').text(data);
		});
	});

	//task2

	$('#calc2').on('click', () => {

		$.post('a2.php', 
		{
			"year": $('#year').val()
		}, 
		data => {
			$('.out2').text(data);
		});
	});


	// task3

	$('#height').on('change', () => {
		$('#inpval').html($('#height').val());
	});

	$('#calc3').on('click', () => {

		$.post('a3.php', 
		{
			"sex": $('input[name=sex]:checked').val(),
			"height": $('#height').val()
		}, 
		data => {
			$('.out3').text(data);
		});
	});

	//task 4 

	$('#calc4').on('click', () => {

		$.post('mail.php', 
		{
			"fio": $('.fio').val(),
			"email": $('.email').val(),
			"phone": $('.phone').val()
		}, 
		data => {
			$('.out4').text(data);
		});
	});

	//task 5

	outGood();

	$('input[name=art]').on('change', outGood);

});


let outGood = () => {
	let x;
	$('#inp1').is(':checked') ? x = $('#inp1').val(): x = $('#inp2').val();

	$.get('goods.php', 
	{
		art: x
	}, 
	data => {
		data = JSON.parse(data);
		let out ='';

		out =	`
		<div class="card">
		<h1>${data.name}</h1>
		<img src="${data.img}" alt="">
		<p class="weight">Weight : ${data.weight}</p>
		<p class="cost">Price : ${data.cost}</p>
		</div>`;

		$('.out5').html(out);

	});
}