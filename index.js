const twit = require('twit');
const config = require('./config.js');

const Twitter = new twit(config);

var bot = function() {
    var params = {
        q: '#nisharrk',  
        result_type: 'recent',
        lang: 'en'
    }
    
    Twitter.get('search/tweets', params, function(err, data) {
        if (!err) {
            var retweetId = data.statuses[0].id_str;
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
}

bot();
setInterval(bot, 1000);


// function getTweets(){
//     return new Promise((resolve, reject) => {
//         let params = {
//             q: '#elonmusk',
//             result_type: 'recent',
//             lang: 'en'
//         }
//         twitter.get('search/tweets', params, function(err, data) {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         })
//     })
// }

// function postRetweet (id) {
//     return new Promise ((resolve, reject) => {
//         var params = {
//             id,
//         };
//         Twitter.post('statuses/retweet', params, function(err, data, response) {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         })
//     })
// } 

// async function bot() {
//     try {
//         const data = await getTweets();
//         const tweets = data.statuses;
//         console.log("Tweets found: " + tweets.length);

//         for await (let i of tweets) {
//             try {
//                 await postRetweet(i.id_str);
//                 console.log("Retweeted: " + i.id_str);
//             } catch (err) {
//                 console.log("Retweet failed: " + i.id_str);
//             }
//         }
//     }
//     catch (err) {
//         console.error(err);
//     }
// } 


// console.log("Bot is running");
// setInterval(postRetweet, 1000); // every 1 second