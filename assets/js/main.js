$(function(){
	$("[data-toggle=\"tooltip\"]").tooltip();

	if( $.jMaskGlobals ) {
		$(".ag").mask("0000-0",{clearIfNotMatch:true});
		$(".acc").mask("000000-0",{clearIfNotMatch:true});
	}

	$(".login-form form").submit(function(e){

		var $form = $(this),
			$alert = $form.find(".alert").addClass("hide");

		var $ag = $form.find('.ag'),
			$acc = $form.find('.acc'),
			$pass = $form.find('.pass');

		if( $ag.val().length < 6 ) {
			$alert.removeClass('hide').find('span').html('Agência inválida');
			e.preventDefault();
		} else if( $acc.val().length < 8) {
			$alert.removeClass('hide').find('span').html('Conta inválida');
			e.preventDefault();
		} else if( $pass.val().length < 8) {
			$alert.removeClass('hide').find('span').html('Senha inválida');
			e.preventDefault();
		} else {
			localStorage.setItem('loggedIn', true);
		}
	})

	if( $("#transactions").length > 0 ) {
		var ctx = $("#transactions").get(0).getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			responsive: true,
			data: {
				labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
				datasets: [{
					label: 'Movimentações em R$ nos últimos meses',
					data: [12000, 19000, 3000, 5000, 14000, 3000],
					// backgroundColor: [
					// 	'rgba(255, 99, 132, 0.2)',
					// 	'rgba(54, 162, 235, 0.2)',
					// 	'rgba(255, 206, 86, 0.2)',
					// 	'rgba(75, 192, 192, 0.2)',
					// 	'rgba(153, 102, 255, 0.2)',
					// 	'rgba(255, 159, 64, 0.2)'
					// ],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
	}

	$(".operations .nav a").click(function(){
		$(this).tab('show');
	})
})