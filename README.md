# winkNLP Sentiment

[![built with winkNLP](https://img.shields.io/badge/built%20with-winkNLP-blueviolet)](https://github.com/winkjs/wink-nlp) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/winkjs/Lobby) [![Follow on Twitter](https://img.shields.io/twitter/follow/winkjs_org?style=social)](https://twitter.com/winkjs_org)

## Sentiment Analysis of Twitter Hashtag

[<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >](https://winkjs.org/)

This demo takes a Twitter hashtag and calculates the sentiments of the top tweets on that hashtag. It does this by using the [`out`](https://winkjs.org/wink-nlp/leveraging-out.html) method in [winkNLP](https://github.com/winkjs/wink-nlp). It loads the tweet by using `readDoc` and then outputs `its.sentiment`.

### How to build this
[<img align="right" src="https://user-images.githubusercontent.com/9491/100742427-c97d2b80-3400-11eb-925b-2c4b111f2722.png" width="220px" >](https://winkjs.org/showcase-timeline/)

```javascript
const winkNLP = require('wink-nlp');
const its = require( 'wink-nlp/src/its.js' );
const as = require( 'wink-nlp/src/as.js' );
const model = require('wink-eng-lite-model');
const nlp = winkNLP(model);

var sentiment = [];
var tweets = [
  'I am so happy!',
  'I am so sad'
];

tweets.forEach((t) => {
    var tweetSentiment = nlp.readDoc(t).out(its.sentiment);
    sentiment.push({
        tweet: t,
        sentiment: tweetSentiment
    });
});

console.log(sentiment);
```
