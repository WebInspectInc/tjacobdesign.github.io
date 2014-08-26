---
layout: post
title: "Multiple Transitions"
date: 2014-6-7 7:45:00
css: "/css/post/multiple-transitions.css"
---

The CSS transition property is essential for modern UI design. Animation brings an interface to life, and changes a merely *good* interface into a *great* one.

## Getting Started

CSS transitions are also super easy to get into. Here’s a basic example:

{% highlight css %}

.test {
	color: blue;
	transition: color 50ms ease-out 50ms;
}
.test:hover {
	color: red;
}

{% endhighlight %}

The CSS `transition` property takes up to four arguments: a *property*, a *duration*, an *timing function*, and a *delay*. Let’s go a little more in depth.

* First is the property you want to transition. In the example above we’re targeting `color`. This says “Take any changes to the `color` property and apply a transition to them.” You can’t transition every CSS property, but you can do it to an [awful lot of them](http://leaverou.github.io/animatable/).
* Then comes the duration. This is how long the animation will take. You can define it using seconds (`1s`) or milliseconds (`1000ms`).
* After that you can use a timing function. This helps bring even more life to your animations if used properly. Rule of thumb: for quick animations (less than 100ms) use `linear`, or else it‘ll probably just look laggy. You can play with timing functions at [cubic-bezier.com](http://cubic-bezier.com/).
* And finally a delay. I don’t use this value as much on transitions as I do on animations, but it can still be useful. Same as duration, you can define it using seconds or millseconds.
