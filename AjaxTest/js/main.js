$( function() {
	$("#change").on('click', function () {
		$.ajax({
			url: 'php/word.php',
			// dataType: 'text',
			// type: 'POST',
			// data:{
			//        item: "change";
			//    },
			success: function (ret) {
				console.log(ret);
			}
		})
	})
});