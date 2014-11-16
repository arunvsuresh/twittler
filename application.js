$(document).ready(function(){

        var $body = $('body');
        
        $body.html('');
        

        var showNewTweets = setInterval(function(){
          showTweets();
        }, 1000);

        var showTweets = function() {

                var index = streams.home.length - 1;

                var div_count = $('div').length - 1;

                while (index >= 0) {
                
                  var tweet = streams.home[index];

                  var now = moment(tweet.created_at);

                  var $tweet = $('<div class="tweet"></div>');
                  
                  var $name = $('<a class="user" data-user="' + tweet.user + '" href="#"></a>').text("@" + tweet.user);

                  var $message = $('<span class="message" data-message="' + tweet.message + '"></span>').text(" " + tweet.message + " ");
                  
                  var $date = $('<span class="date"></span>').text(now);

                  $tweet.append($name).append($message).append($date);

                  $tweet.prependTo($body);

                  index--;

                }

            $("body").on("click", "a.user", function(){
                userPage($(this).data('user'));
            });
          };

        showTweets();

        var userPage = function(username) {
          
            clearInterval(showNewTweets);
            
            var div_count = $('div').length - 1;
            
            var userTweet = streams.users[username];
            
            var index = userTweet.length - 1;
            
            $body.html('');
            while (index >= 0) {
              var tweet = userTweet[index];
              var now = moment(tweet.created_at);
              var $tweet = $('<div class="tweet"></div>');
              var $name = $('<a class="user" href="#"></a>').text('@' + tweet.user + " ");
              var $message = $('<span class="message"></span').text(tweet.message);
              var $date = $('<span class="date"></span>').text(now);
              $tweet.append('<br><br>').append($name).append($message).append($date);
              $body.append($tweet);
              index--;
            }
          };
        
});