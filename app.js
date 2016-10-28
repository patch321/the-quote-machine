//NEW QUOTE BUTTON SETUP
var quote_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';
var quote = {}
var getQuote = function(json) {
	console.log(json)
	quote = {
		'quoteText': json.quoteText,
		'quoteAuthor': json.quoteAuthor
	};
	var html = '';
	if (quote.quoteAuthor === "") {
		quote.quoteAuthor = 'Unknown';
	}

	html += '<p class = "quote-text">"' + quote.quoteText;
	html += '"</p>' + '<p class = "quote-author">- ';
	html += quote.quoteAuthor + '</p>';

	$('.quotebox').html(html);


};
//TWEET SETUP

//PAGE LOADS
$(document).ready(function() {
	$.getJSON(quote_URL, getQuote, 'jsonp');
		//GET QUOTE Button Action
	$("#getQuote-btn").on("click", function() {
		$.getJSON(quote_URL, getQuote, 'jsonp');
	});
		//TWEET Button Action
	$('.twitter-share-button').on("click", function() {
		console.log('hello11');
		var textToTweet = '"' + quote.quoteText + '" - ' + quote.quoteAuthor;
		var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
		window.open(twtLink, '_blank');
	});
	
});