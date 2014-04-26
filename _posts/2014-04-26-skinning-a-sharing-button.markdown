---
layout: post
title: "On Skinning a Sharing Button"
date: 2014-4-23 9:42:00
css: "/css/post/sharing-button.css"
js: "/js/post/sharing-buttons.js"
---

Sharing buttons. They're everywhere, from big sites like the NYTimes to little “Mom and Pop” shops. Social networks make sure that they’re super easy to implement, since sharing *is* the meat and potatoes of what they do. And every developer out there has a different idea of how they should work. I am no exception, and this is my take.

## First of All

I should give a little disclaimer: I never use sharing buttons. I don’t like them very much, especially the *official* sharing buttons, the ones that track everything and bottleneck perfectly good web pages. However I do like the *idea* of sharing buttons, what could be bad about more people sharing your articles?

But despite my reservations, they’re a fun project. I’m working on a project for my company, [Firespring](http://firespring.com/), and my colleague [Bryon Stuefer](http://bryonstuefer.com/) and I came up with this:

<p class="special-share" id="specialShare1">Share this page
  <a href="#" class="first"></a>
  <a href="#" class="second"></a>
  <a href="#" class="third"></a>
</p>

I put it on [CodePen](http://codepen.io/tjacobdesign/pen/cHsld/), and got a ton of really good feedback, so I’m going to sort through that here.

## Method 1: Clickity Click

This version you actually have to click the button to see the available share actions. They then hide themselves on mouse out:

<p class="special-click" id="clickity">Share this page
  <a class="first"></a>
  <a class="second"></a>
  <a class="third"></a>
</p>

### Pros:

* Requires two clicks to share, so less accident-prone than a hover-based interaction.
* Probably more consistent with mobile, since we have no hover states on a touch screen.

### Cons:

* Takes two clicks to share. Makes the barrier slightly higher.
* The user can’t tell *how* they can share until after they click the button.

## Method 2: Plain Hover

It’s the same as the one at the top of the article:

<p class="special-share" id="specialShare2">Share this page
  <a href="#" class="first"></a>
  <a href="#" class="second"></a>
  <a href="#" class="third"></a>
</p>

### Pros:

* Easy to grok. You hover, it shows you the available actions, and you take one (or not). Simple.

### Cons:

* The user, seeing a button, might click automatically and accidentally trigger one of the share actions. Worst case scenario: it pops up a window and they close it, so not too bad. Just not ideal.

## Method 3: Add a Buffer

This uses the hover technique, but adds in a buffer around the edges. That way the animation is triggered slightly before the user can click anything, (hopefully) avoiding accidental clickage. Sorry touch screens, you won’t see a difference here, but the interaction feels nicer with a mouse:

<p class="special-share buffer" id="specialShare3">Share this page
  <a href="#" class="first"></a>
  <a href="#" class="second"></a>
  <a href="#" class="third"></a>
</p>

This is my favorite technique. It eliminates a lot of the cons above, and keeps most of the pros.

## Bonus Round: Mobile

As for mobile, we could do one of two things: just show the icons by default (which is what I did for most of the buttons above. Resize to see, if you’re on desktop), or reveal on tap. I like revealing it on tap, but speaking from a useability perspective it would probably be better to show them all the time.

So there are a lot of thoughts and opinions in this article. Feel free to voice your own in the comments below, I’m particularly interested in more thoughts on mobile.