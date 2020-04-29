const getSentiment = function (hashtag) {
  fetch('https://showcase-serverless.now.sh/twitter-sentiment?hashtag='+hashtag)
    .then(function (res) {
      return res.json();
    }).then(function (d) {
      console.log(d);
    })
}

$(function () {
  $('#analyze-button').on('click', function () {
    const hashtag = $('#hashtag')[0].value;
    if (hashtag.trim() === '' ) return false;
    getSentiment(hashtag);
  });
})
