---
layout: post
title:  "Animate All the Things!"
date:   2014-04-1 21:05:00
tags: "JavaScript"
---

Animations are hard. Making an animation feel right takes an equal concentration of sweat, time, and luck, and few give enough of themselves to produce anything truly good. It doesn’t make it any easier that there are so many different ways to animate things on the web, so here is where you’ll find what you need to choose the right tech for the job.

## CSS Animations

First and fastest are CSS animations. CSS animations are quick to code and super easy to tweak. CSS animations work particularly well when you’re changing CSS controlled states (such as `hover`, `focus`, or `active`), but they can transition most CSS properties as long as all you need is from one value to another value (such as red to pink). If you think outside the box you can get some pretty [wacky results](http://leaverou.github.io/animatable/). (I particularly like the 3D examples at the bottom)

There are two ways to animate using CSS. Transitioning from one thing to another:

{% highlight css %}

.test {
	color: pink;
	transition: color 0.5s linear;
}

.test:hover {
	color: red;
}

{% endhighlight %}

And you can also define your own keyframe animations:

{% highlight css %}

.test {
	animation: test 1s linear alternate infinite;
}
@keyframes test {
	0% {
		color: pink;
	}
	100% {
		color: red;
	}
}

{% endhighlight %}

You can read more about [CSS Transitions](http://css-tricks.com/almanac/properties/t/transition/) and [Animations](http://css-tricks.com/almanac/properties/a/animation/) at CSS Tricks.

## JavaScript Animations

Next is the tried-and-true but lacking. This is how we used to do animations on the web:

{% highlight js %}
function moveSomething() {
	foo.style.left = (foo.style.left + 10) + 'px';
	setTimeout(moveSomething, 500);
}
{% endhighlight %}

It can get a little more complex than this, depending on how much work you want to put into it. But the basic idea is simple, we move something a little bit, wait a little bit, and then do it again!

That’s a programming concept called recursion, by the way. Go ahead and feel smug that you know what that means, you could even [tweet it](http://twitter.com/share?text=I%20know%20recursion,%20y’all.&url=http://foradesigner.com/) if you like.

### A Better Way

But wait! Don’t use the method above. It *is* how we used to do things, but fortunately there’s a better way now. It’s called requestAnimationFrame. Here’s how I usually use it:

{% highlight js %}

function moveSomething() {
	foo.style.left = (foo.style.left + 10) + 'px';
}

function animate (callback, time, oldTime) {
	var oldTime = oldTime || new Date().getTime();
	var now = new Date();
	if (new Date(oldTime + time) < now) {
		callback();
		oldTime = now.getTime();
	}
	requestAnimationFrame(function() { animate(callback, time, oldTime); });
}
 
animate(moveSomething, 500);

{% endhighlight %}

Yeah I know, that’s kind of an intimidating block of code. Let’s break it down.

RequestAnimationFrame is a lot like setting a timeout (like we did above), but it has one important difference: Rather than *forcing* the browser to run that code every 500 milliseconds, it *asks* the browser to run the code every 500 milliseconds. That has a host of advantages, for now we’ll just say it helps with battery life and makes your animations smoother. There aren’t really any disadvantages, so you really should use it.

One note though: you might need a [polyfill](https://gist.github.com/paulirish/1579671) if you support IE<10.

## SVG Animations

Here’s an example of a particularly incredible SVG animation that I found recently:

<p data-height="268" data-theme-id="5360" data-slug-hash="rawkK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/indyplanets/pen/rawkK/'>Hulk SVG Animation</a> by Jason Weaver (<a href='http://codepen.io/indyplanets'>@indyplanets</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Pretty sweet, eh? SVG animation is a whole other can of worms, and there are a ton of different ways to handle it. Here’s one simple example:

{% highlight xml %}

<svg>
	<rect width="200" height="200" fill="pink">
		<animate attributeName="height" from="0" to="200" dur="3s" />
	</rect>
</svg>

{% endhighlight %}

It has an actual [animate element](http://www.w3.org/TR/SVG11/animate.html#AnimateElement), which defines *what* you want to animate, where you want it to *start*, where you want it to *end*, and how long it should take. Of course that isn’t enough to build a hulk animation like the one above, but it’s a start. There are [lots of different ways to animate SVG](http://www.hongkiat.com/blog/scalable-vector-graphics-animation/), we’ll dig deeper in another article.

## Related Resources

* [Flashless Animation in CSS3](http://24ways.org/2012/flashless-animation/) by Rachel Nabors. She’s also got an [class about it](http://frontendmasters.com/courses/animation-storytelling-html5-css3/).
* [Really neat hacks for CSS animations](http://css-tricks.com/css-animation-tricks/) on CSS-Tricks
* [Advice for CSS transitions](http://trentwalton.com/2010/03/22/css3-in-transition/) from Trent Walton.
* [RequestAnimationFrame info](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) on Mozilla Hacks.
* Remember that [great animation is subtle](http://byrichardpowell.co.uk/post/10648897311/animations-role-in-web-design). Don’t abuse these methods please.