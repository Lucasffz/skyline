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
	});

	$(".logout").click(function(){
		localStorage.clear()
		document.location.href = "login.html?logout=success";
	});

	if( $(".login-form").length > 0 ) {
		if( $_GET('logout') == "success" ) {
			$(".logout-info").removeClass("hide");

			setTimeout(function(){
				$(".logout-info").slideUp('slow', function(){
					$(this).addClass("hide");
					history.pushState(null,null, "login.html");
				})
			}, 5000);
		}
	}

	$("#slider").carousel({
		interval: 5000
	})

	$(".site-section.animated").css("opacity", 0);

	$(window).scroll(function(){

		var $pos = $(this).scrollTop();

		$(".site-section.animated").each(function(){
			if( $pos > $(this).offset().top - 250 ) {
				$(this).css("opacity", 1);
				$(this).addClass("fadeInDown");
			}
		})
	})

	$(".contact").submit(function(e){
		e.preventDefault();

		if( $(this).find(".name").val().length < 4 ) {
			alert("Insira seu nome corretamente");
		} else if( $(this).find(".email").val().indexOf('@') < 0 || $(this).find(".email").val().indexOf('.') < 0 ) {
			alert("Insira seu email corretamente");
		} else if( $(this).find(".message").val().length < 4 ) {
			alert("Insira sua mensagem");
		} else {
			alert("Mensagem enviada com sucesso");
			$(this).find('input,textarea').val('');
		}
	})
})