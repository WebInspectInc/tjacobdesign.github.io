---
layout: post
title: "Fullscreen Background Videos FTW"
date: 2014-04-16 17:02:00
---

Full screen background videos are [getting](http://egorilla.net/) [pretty](http://www.myprovence.fr/snapshots2012/en) [popular](http://squatdesign.com/) right now, and for good reason. Bandwidth is cheaper then ever, and it’s a cool effect. The problem is that most of these sites do it wrong, with JavaScript or CSS that doesn’t cover all the bases. Here’s how to do it right.

## The First Idea

Here’s a naive way to do it:

{% highlight css %}

.bg-video {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}

{% endhighlight %}

That doesn’t quite work, unfortunately. It *does* stretch the background, but it doesn’t maintain the aspect ratio, so it ends up stretching or squishing whatever you’re trying to show.

## The Right Way

Here’s the solution:

{% highlight css %}

.bg-video {
    position: fixed;
    width: auto;
    height: auto;
    min-width: auto;
    min-height: auto;
}

{% endhighlight %}

That tells the browser to go ahead and calculate the height and width, but to make sure that they aren’t less than the width of the screen. That solves our problem by maintaining the aspect ratio, and it also completely fills the screen.

You’ll also probably need some sort of a z-index to make it go behind everything else, but I’ll let you tweak it to fit your own code base.

This is supported in everything above IE6, by the way. And it works for images just as well as videos. Enjoy!