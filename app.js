//NEW QUOTE BUTTON SETUP
var quote_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';

function getQuote(json) {
	var html = '';
	return quote = {
		'quoteText': json.quoteText,
		'quoteAuthor': json.quoteAuthor
	};
}

function appendQuote(getQuote){
	if (quote.quoteAuthor === "") {
		quote.quoteAuthor = 'Unknown';
	}

	html += '<p class = "quote-text">"' + quote.quoteText;
	html += '"</p>' + '<p class = "quote-author">- ';
	html += quote.quoteAuthor + '</p>';

	$('.quotebox').html(html);
}

//TWEET SETUP

//PAGE LOADS
$(document).ready(function() {
	$.getJSON(quote_URL, getQuote, 'jsonp');
	//quote button action
	$("#getQuote").on("click", function() {
		$.getJSON(quote_URL, getQuote, 'jsonp');
	});
	//tweet button action
	$('.twitter-share-button').on("click", function() {
		console.log('hello11');
		var textToTweet = quote.quoteText;
		if (textToTweet.length > 140) {
			alert('Tweet should be less than 140 Chars');
		} else {
			var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
			window.open(twtLink, '_blank');
		}
	})
});