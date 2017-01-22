$(document).ready(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response) {
    var replyQuote = response.quoteText;
    var replyAuthor = response.quoteAuthor;
    $("#quote").html(replyQuote);
    $("#author").html(replyAuthor);

    var tweetQuote = "";
    if (replyAuthor) {
     tweetQuote = replyAuthor + ": " + replyQuote;
    }
    else {
      tweetQuote = replyQuote;
    };
    tweetQuote = tweetQuote.replace(/ /g, "%20");
    var newLink = "";
    newLink = "https://twitter.com/intent/tweet?button_hashtag=quote&text=" + tweetQuote;
    $(".twitter-hashtag-button").attr("href", newLink);

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

  });

  $("#button").on("click", function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response) {
      var replyQuote = response.quoteText;
      var replyAuthor = response.quoteAuthor;
      $("#quote").html(replyQuote);
      $("#author").html(replyAuthor);

      var tweetQuote = "";
      if (replyAuthor) {
      tweetQuote = replyAuthor + ": " + replyQuote;
      }
      else {
        tweetQuote = replyQuote;
      }
      tweetQuote = tweetQuote.replace(/ /g, "%20");
      var newLink = "";
      newLink = "https://twitter.com/intent/tweet?button_hashtag=quote&text=" + tweetQuote + '"';
      $('#tw-div iframe').remove();
      var newTwBtn = '<a href="' + newLink + ' ' + 'class="twitter-hashtag-button" data-size="large" data-dnt="true">Tweet</a>';
      $("#tw-div").append(newTwBtn);
      twttr.widgets.load();

      });
  });

 });

/* alternatively try https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&key=[KEY]&format=json&lang=en */

//var convertedResponse = JSON.stringify(response);
