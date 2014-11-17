
$(document).ready(function(){

        var $body = $('body');
        
        $body.html('');

        var showNewTweets = setInterval(function(){
          showOneTweet();
        }, 1000);

        // var showTweets = function() {

        //         var index = streams.home.length - 1;
        //         var div_count = $('div').length - 1;

        //         while (index >= 0) {   
        //           var tweet = streams.home[index];
        //           var now = moment(tweet.created_at);
        //           var $tweet = $('<div class="tweet"></div>');
        //           var $name = $('<a class="user" data-user="' + tweet.user + '" href="#"></a>').text("@" + tweet.user);
        //           var $message = $('<span class="message" data-message="' + tweet.message + '"></span>').text(" " + tweet.message + " ");
        //           var $date = $('<span class="date"></span>').text(now);
        //           $tweet.append($name).append($message).append($date);
        //           $tweet.prependTo($body);
        //           index--;
        //         }
        //   };

          var showOneTweet = function(){
            //need to cache the array;
                // var index = streams.home.length - 1;
                // var div_count = $('div').length - 1;

                // while (index >= 0) {   
                  var tweet = streams.home[0];
                  var now = moment(tweet.created_at);
                  var $tweet = $('<div class="tweet"></div>');
                  var $name = $('<a class="user" data-user="' + tweet.user + '" href="#"></a>').text("@" + tweet.user);
                  var $message = $('<span class="message" data-message="' + tweet.message + '"></span>').text(" " + tweet.message + " ");
                  var $date = $('<span class="date"></span>').text(now);
                  $tweet.append($name).append($message).append($date);
                  $tweet.prependTo($body);
                  streams.home.shift();
                  // index--;
                // }
          };

        $("body").on("click", "a.user", function(){
            userPage($(this).data('user'));
        }); 

        showOneTweet();

        var userPage = function(username) {
          
            clearInterval(showNewTweets);
            
            var userTweets = $("a:contains("+username+")");
            var userTweetsCount = userTweets.length - 1;
            // console.log(userTweetCount.length);



            //var div_count = $('div').length - 1;
            //console.log(div_count);   
            var userTweet = streams.users[username]; 

            $body.html('');
            while (userTweetsCount >= 0) {
              var tweet = userTweet[userTweetsCount];
              var now = moment(tweet.created_at);
              var $tweet = $('<div class="tweet"></div>');
              var $name = $('<a class="user" href="#"></a>').text('@' + tweet.user + " ");
              var $message = $('<span class="message"></span').text(tweet.message);
              var $date = $('<span class="date"></span>').text(now);
              $tweet.append($name).append($message).append($date);
              $body.append($tweet);
              userTweetsCount--;
            }//while

          };
        
});