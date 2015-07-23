# reddata

I use [reddit comments dataset](https://archive.org/details/2015_reddit_comments_corpus) to
compute related subreddits. 

Basic principle of this recommender is "redditors who posted to this subreddit also post to ...".
In math terms, I'm just computing [Jaccard index](https://en.wikipedia.org/wiki/Jaccard_index)

The code is not supposed to be looked at, but check this early results:

### related to [/r/programming](http://reddit.com/r/programming)

* [/r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor) - simlarity 0.0583
* [/r/linux](https://www.reddit.com/r/linux) - simlarity 0.0560
* [/r/learnprogramming](https://www.reddit.com/r/learnprogramming) - simlarity 0.0406
* [/r/webdev](https://www.reddit.com/r/webdev) - simlarity 0.0405
* [/r/technology](https://www.reddit.com/r/technology) - simlarity 0.0345
* [/r/Python](https://www.reddit.com/r/Python) - simlarity 0.0341
* [/r/cscareerquestions](https://www.reddit.com/r/cscareerquestions) - simlarity 0.0322
* [/r/javascript](https://www.reddit.com/r/javascript) - simlarity 0.0297
* [/r/gamedev](https://www.reddit.com/r/gamedev) - simlarity 0.0284
* [/r/compsci](https://www.reddit.com/r/compsci) - simlarity 0.0261

### related to [/r/gamedev](https://www.reddit.com/r/gamedev)
* [/r/Unity3D](https://www.reddit.com/r/Unity3D) - simlarity 0.0734
* [/r/IndieGaming](https://www.reddit.com/r/IndieGaming) - simlarity 0.0445
* [/r/Unity2D](https://www.reddit.com/r/Unity2D) - simlarity 0.0348
* [/r/programming](https://www.reddit.com/r/programming) - simlarity 0.0334
* [/r/gamedesign](https://www.reddit.com/r/gamedesign) - simlarity 0.0305
* [/r/gameDevClassifieds](https://www.reddit.com/r/gameDevClassifieds) - simlarity 0.0247
* [/r/learnprogramming](https://www.reddit.com/r/learnprogramming) - simlarity 0.0232
* [/r/unrealengine](https://www.reddit.com/r/unrealengine) - simlarity 0.0209
* [/r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor) - simlarity 0.0203

### related to [/r/vim](https://www.reddit.com/r/vim)
* [/r/neovim](https://www.reddit.com/r/neovim) - simlarity 0.0369
* [/r/commandline](https://www.reddit.com/r/commandline) - simlarity 0.0348
* [/r/archlinux](https://www.reddit.com/r/archlinux) - simlarity 0.0304
* [/r/unixporn](https://www.reddit.com/r/unixporn) - simlarity 0.0252
* [/r/i3wm](https://www.reddit.com/r/i3wm) - simlarity 0.0181
* [/r/linux](https://www.reddit.com/r/linux) - simlarity 0.0181
* [/r/haskell](https://www.reddit.com/r/haskell) - simlarity 0.0176
* [/r/emacs](https://www.reddit.com/r/emacs) - simlarity 0.0172
* [/r/Python](https://www.reddit.com/r/Python) - simlarity 0.0171

### related to [/r/visualization](https://www.reddit.com/r/visualization)
* [/r/tableau](https://www.reddit.com/r/tableau) - simlarity 0.0210
* [/r/IPython](https://www.reddit.com/r/IPython) - simlarity 0.0177
* [/r/datasets](https://www.reddit.com/r/datasets) - simlarity 0.0141
* [/r/rstats](https://www.reddit.com/r/rstats) - simlarity 0.0131
* [/r/AjaxAmsterdam](https://www.reddit.com/r/AjaxAmsterdam) - simlarity 0.0128
* [/r/dataisugly](https://www.reddit.com/r/dataisugly) - simlarity 0.0127
* [/r/Mousesports](https://www.reddit.com/r/Mousesports) - simlarity 0.0125
* [/r/punkcirclejerk](https://www.reddit.com/r/punkcirclejerk) - simlarity 0.0125
* [/r/le_bald_shitter](https://www.reddit.com/r/le_bald_shitter) - simlarity 0.0125

### related to [/r/Seattle](http://reddit.com/r/Seattle)

* [/r/Seahawks](https://www.reddit.com/r/Seahawks) - simlarity 0.0458
* [/r/Mariners](https://www.reddit.com/r/Mariners) - simlarity 0.0257
* [/r/Washington](https://www.reddit.com/r/Washington) - simlarity 0.0180
* [/r/SoundersFC](https://www.reddit.com/r/SoundersFC) - simlarity 0.0167
* [/r/MLS](https://www.reddit.com/r/MLS) - simlarity 0.0135
* [/r/udub](https://www.reddit.com/r/udub) - simlarity 0.0118
* [/r/Tacoma](https://www.reddit.com/r/Tacoma) - simlarity 0.0117
* [/r/politics](https://www.reddit.com/r/politics) - simlarity 0.0105
* [/r/bicycling](https://www.reddit.com/r/bicycling) - simlarity 0.0102

### related to [/r/nyc](https://www.reddit.com/r/nyc)
* [/r/AskNYC](https://www.reddit.com/r/AskNYC) - simlarity 0.0776
* [/r/Brooklyn](https://www.reddit.com/r/Brooklyn) - simlarity 0.0545
* [/r/NYCbike](https://www.reddit.com/r/NYCbike) - simlarity 0.0250
* [/r/newjersey](https://www.reddit.com/r/newjersey) - simlarity 0.0185
* [/r/rangers](https://www.reddit.com/r/rangers) - simlarity 0.0182
* [/r/NewYorkMets](https://www.reddit.com/r/NewYorkMets) - simlarity 0.0166
* [/r/TrueReddit](https://www.reddit.com/r/TrueReddit) - simlarity 0.0166
* [/r/longisland](https://www.reddit.com/r/longisland) - simlarity 0.0157
* [/r/astoria](https://www.reddit.com/r/astoria) - simlarity 0.0140

While results looks very promissing for subreddits with less than one
million subscribers, more popular subreddits unfortunately get their results
saturated with other popular subreddits:

### related to [/r/books](https://www.reddit.com/r/books)
* [/r/television](https://www.reddit.com/r/television) - simlarity 0.0578
* [/r/explainlikeimfive](https://www.reddit.com/r/explainlikeimfive) - simlarity 0.0564
* [/r/movies](https://www.reddit.com/r/movies) - simlarity 0.0535
* [/r/news](https://www.reddit.com/r/news) - simlarity 0.0525
* [/r/nottheonion](https://www.reddit.com/r/nottheonion) - simlarity 0.0499
* [/r/todayilearned](https://www.reddit.com/r/todayilearned) - simlarity 0.0487
* [/r/worldnews](https://www.reddit.com/r/worldnews) - simlarity 0.0475
* [/r/Showerthoughts](https://www.reddit.com/r/Showerthoughts) - simlarity 0.0452
* [/r/gifs](https://www.reddit.com/r/gifs) - simlarity 0.0434

If you have an idea how to fix this please let me know :)

## Next step 

Provide web interface.

# license

MIT
