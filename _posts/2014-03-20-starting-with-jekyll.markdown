---
layout: post
title:  "Starting with Jekyll"
date:   2014-03-20 21:05:00
---

Jekyll is a [blog-aware static site generator](http://jekyllrb.com/). It is the engine that this very site runs on, and here is where I’ll tell you what and why.

## Jekyll vs. WordPress

It’s been a hot question for quite a while, should I use [WordPress or Jekyll](http://stevenyue.com/2012/08/12/jekyll-vs-wordpress-why-i-prefer-wordpress/)? Fair warning: you aren’t going to find that answer here. Merely another piece of the puzzle that you’ll just have to assemble for yourself.

TL;DR: It depends. Go with what works best for your situation.

## A Little Bit of Background

There are very few web devigners nowadays who can say that they haven’t used WordPress for one situation or another. It’s simply too big to ignore. That is certainly *not* the case with Jekyll, very few people have even heard of it, and it’s significantly less valuable to say you know Jekyll than it is to say you know WordPress. So from a purely practical standpoint, WordPress knowledge is significantly more valuable to have. I’ve already built nearly a dozen WP sites, so that wasn’t much of an incentive for me.

## What is a Static Site Generator? What Advantages Does It Have?

Jekyll, as mentioned above, is a static site generator. Geek talk, I know,  not everyone knows what that means, so I’ll tell you:

Every website on the web is controlled by two computers. The computer that you’re using (your laptop, desktop, or your phone, it doesn’t matter), and another completely separate computer that we call that the [server](http://en.wikipedia.org/wiki/Server_%28computing%29). The server sends all of the files needed to display a website.

The server also does a lot more than that, things like saving and retrieving data and pasting files together to make bigger files. A preprocessor does all of that data manipulation and file pasting on the developer’s *local* machine, rather than doing all of that on the server. That gives a lot more control to *your* computer (or phone, whatever), which comes with a whole host of benefits.

## The Benefits

### Easy on the Server

All your server has to do is send a few files over. No database connections, no backend logic or code, nothing. Just plain files.

### Free Hosting

[Github Pages](http://pages.github.com) offers free hosting to Jekyll-built sites. You have to know a bit about Git and Github, and it’s only free if you make your site open source (like [ForADesigner.com]({{ site.github.repository_url }})). But if you’re okay with that then it isn’t [too good to be true](http://stackoverflow.com/questions/9222245/what-are-the-limits-of-github-hosting). I personally rather enjoy never needing to worry about whether my site is up or not, and for now it’s working out rather well.

### Unhackable

...well. Not *really* unhackable, but about as close as it gets. Some villain *can* hack it, but if someone *does* then all you have to do is upload a new copy. Because you have to build the site on your computer before you serve it up, you always have a backup sitting on your computer. No more lost data for you.


## The Downsides

### Less Flexible

Changing your website means rebuilding the whole thing. That means that publishing can only happen on your computer. You can still write on your phone, but you can’t publish that until you build it on your computer. Bummer.

### Hard Command Line Jumbleytron 2000

I know, command line is hard. And you have to use it for Jekyll. For some of you that is an immediate turn off, but hopefully you can be convinced otherwise, because it’s really a very small downside for the power it gives you.

### No Comments

This one is pretty easy to fix using a services like [Disqus](http://disqus.com/). But in a way that means you don’t “own your own content”, which is a problem for some people. This blog is, of course, completely free and open source, so obviously I’m not much concerned about that.

## It’s a Wrap

I told you that I wasn’t going to give you an answer. Jekyll and WordPress are both great, but in different ways. Hopefully this gives you a good place to start in your quest.

I will explore both of them further in the coming months. Stay tuned.
