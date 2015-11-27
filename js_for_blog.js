$(document).ready(function(){
	
	$(".article").click(function(){
		$("#inner_article").css("visibility", "visible");
		$("#article_content").css("visibility", "visible");
	});

	// 文章畫面跳出
	$("#inner_article").click(function(){
		$("#inner_article").css("visibility", "hidden");
		$("#article_content").css("visibility", "hidden");
	});

	// for test
	//$.getJSON('https://www.dcard.tw/api/forum/all/1');

	// function data_set(entryIndex, entry){
	// 	var html = '<div class="entry">';
	// 	html += '<h3 class="title">'+ entry['title'] + '</h3>';
	// 	html += '<h4 class="type">' + "分類: " + entry['forum_name'] + '</h4>';
	// 	html += '<h4 class="type">' + "人氣: " + entry['like'] + '</h4>';
	// 	html += '</div>';
	// 	$(".article").append(html);
	// }
	
	// 預設讀取"全部"類文章
	$.getJSON('https://www.dcard.tw/api/forum/all/1',function(data){
		
		$(".article").empty();

		$.each(data,function(entryIndex, entry){
			// console.log(entry['version'][0].title);
			var html = '<div id="article_position">';
			html += '<a class="article_block" href="#">';
			html += '<span class="article">';
			html += '<h3 class="title">'+ entry['version'][0].title + '</h3>';
			html += '<hr>';
			html += '<h4 class="type">' + "分類: " + entry['forum_name'] + '</h4>';
			html += '<h4 class="type">' + "人氣: " + entry['like'] + '</h4>';
			html += '</span>';
			html += '</a>';
			html += '</div>';
			$("#article_position").append(html);
		});
	});
});