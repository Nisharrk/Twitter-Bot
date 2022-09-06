const twit = require('twit');
const config = require('./config.js');

const Twitter = new twit(config);

var retweet = function() {
    // parameters for the search
    var params = {
        q: '#elonmusk', 
        lang: 'en'
    }
    
    // search for the latest tweet with the params above
    Twitter.get('search/tweets', params, function(err, data) {
        if (!err) {
            var tweets = data.statuses;
            console.log("Tweets found: " + tweets.length);

            // loop through the returned tweets
            for (let i of tweets) {
                Twitter.post('statuses/retweet/:id', {
                    id: i.id_str
                }, function(err, response) {
                    if (response) {
                        console.log('Retweeted: ',i.id_str);
                    }
                    if (err) {
                        console.log('Error Retweeting: ', err);
                    }
                });
            }
        }
        else {
          console.log('Error searching tweets: ', err);
        }
    });
}

// grab & retweet as soon as program is running...
retweet();
setInterval(retweet, 1000); // retweet every 1 minute
