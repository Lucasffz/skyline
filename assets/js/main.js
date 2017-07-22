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
})