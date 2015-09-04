//phpに送信
$( function() {
		//入力フォーマットが正しければ通信開始
		$("#submit").on('click', function () {
			var myRet = confirm("本当にこの記事を投稿しますか？");
			
			if ( myRet == true ){
				//データ生成
				var form_data = {
						country: $("input[name=country]").val(),
						university: $("input[name=university]").val(),
						article: $("textarea[name=article]").val(),
						picture: $("input[name=picture]").val()
				};

				$.ajax({
					url: 'php/write_article.php',
					type: 'POST',
					data: form_data,
					success: function (response) {
						console.log("success");
					},
					error: function (response) {
						alert(response);
					},
					timeout: 10000,
				});

				return false;
			}
		});
});