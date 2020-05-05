var showResults = function (tweets) {
  var $results = document.getElementById('results');
  tweets.forEach((tweet) => {
    var row = '<tr>';

    row += '<td>' + tweet.user + '</td>';
    row += '<td>' + tweet.tweet + '</td>';
    row += '<td>' + tweet.normalizedSentimentScore + '</td>';

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
      showResults(d.tweets);
    })
}

$(function () {
  $('#analyze-button').on('click', function () {
    const hashtag = $('#hashtag')[0].value;
    if (hashtag.trim() === '' ) return false;
    getSentiment(hashtag);
  });
})
