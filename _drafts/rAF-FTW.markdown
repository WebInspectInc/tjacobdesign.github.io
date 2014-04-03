---
layout: post
title:  "Animate All the Things!"
date:   2014-04-1 21:05:00
tags: "JavaScript"
---

Animation is hard. Making an animation feel right takes an equal concentration of sweat, time, and luck, and few give enough of themselves to produce anything truly good. It doesn’t make it any easier that there are so many different ways to animate things on the web, so here is where you’ll find what you need to choose the right tech for the job.

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

## JavaScript Animations

Next is the tried-and-true but lacking. This is how we used to do animations on the web:

{% highlight js %}
set
{% endhighlight %}