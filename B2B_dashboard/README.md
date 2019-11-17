# junction2k19 (or whatever the name is going to be)
An app for national parks. It provides visitors valuable, configurable information ahead of time and tracks their devices during the trip. We use this tracking data to improve the visitor's stay and provide valuable information to the people running the park.

        _                        
        \`*-.                    
         )  _`-.                 
        .  : `. .                
        : _   '  \               
        ; *` _.   `*-._          
        `-.-'          `-.       
            ;       `       `.     
            :.       .        \    
            . \  .   :   .-'   .   
            '  `+.;  ;  '      :   
            :  '  |    ;       ;-. 
            ; '   : :`-:     _.`* ;
        .*' /  .*' ; .*`- +'  `*' 
        `*-*   `*-*  `*-*'


## Data description

I queered the mentions of "Finland AND Nuuksio" on Twitter. 

### twitter_pictures

This file contains the tweets that have a picture inside. The structure is as follows: tweet_id: {img_url, hashtags used in the tweet, the tweet text, author id}.

### twitter_users
This file contains the user metadata of ppl who tweeted about Findland and Nuuksio. It might be useful for the B2B side. The structure is as follows: user_id: {user_handle, fullname, location, blog, date_joined, id, num_tweets, following, followers, likes, lists}. 
