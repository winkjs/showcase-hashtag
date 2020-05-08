var showResults = function (tweets) {
  var $results = document.getElementById('results');
  $results.innerHTML = '';

  if (tweets.length === 0) {
    $results.innerHTML = '<center>No tweets on this hashtag! Please try another one.</center>';
  }

  tweets.forEach((tweet) => {
    var row = '<tr>';
    var cssClass = (tweet.normalizedSentimentScore > 0 ) ? 'results__score--positive' : 'results__score--negative';
    cssClass = (tweet.normalizedSentimentScore === 0 ) ? '':cssClass;
    console.log(cssClass);

    row += '<td>' +
        '<img class="results__avatar" src="' + tweet.avatar + '" alt="'+ tweet.user +'">'
      '</td>';
    row += '<td class="results__tweet"><strong>' + tweet.user + '</strong>: ' + tweet.tweet + '</td>';
    row += '<td class="results__score '+ cssClass + '">' + tweet.normalizedSentimentScore.toFixed(1) + '</td>';

    row += '</tr>';
    $results.innerHTML += row;
  });

}

var getSentiment = function (hashtag) {
  fetch('https://showcase-serverless.now.sh/twitter-sentiment?hashtag='+hashtag)
    .then(function (res) {
      return res.json();
    }).then(function (d) {
      console.log(d);
      resetUI();
      showResults(d.tweets);
    })
}

var resetUI = function () {
  $('#analyze-button').prop('value', 'Analyze Sentiment');
  $('.lds-ripple').hide();
}

$(function () {
  $('#analyze-button').on('click', function () {
    // Check input string
    var hashtag = $('#hashtag')[0].value;
    if (hashtag[0] === '#' ) {
      hashtag = hashtag.substr(1)
    }
    if (hashtag.trim() === '' ) return false;

    // UI changes
    $('#analyze-button').prop('value', 'Analyzing…');
    $('.lds-ripple').show();

    // Make API call
    getSentiment(hashtag);
  });
})
