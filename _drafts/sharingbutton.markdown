---
layout: post
title: "On Skinning a Sharing Button"
date: 2014-4-23 9:42:00
css: "/css/post/sharing-button.css"
---

Sharing buttons. They're everywhere, from big sites like the NYTimes to little “Mom and Pop” shops. Social networks make sure that they’re super easy to implement, since sharing *is* the meat and potatoes of what they do. And every developer out there has a different idea of how they should work. I am no exception, and this is my take.

## First of All

I should give a little disclaimer: I never use sharing buttons. I don’t like them very much, especially the *official* sharing buttons, the ones that track everything and bottleneck perfectly good web pages. However I do like the *idea* of sharing buttons, what could be bad about more people sharing your articles?

And despite my reservations, they’re a fun design project. I’m working on a project for my company, [Firespring](http://firespring.com/), and [Bryon Stuefer](http://bryonstuefer.com/) and I came up with this:

<p class="special-share" id="specialShare">Share this page
  <a href="#" class="first"></a>
  <a href="#" class="second"></a>
  <a href="#" class="third"></a>
</p>

I put it on [CodePen](http://codepen.io/tjacobdesign/pen/cHsld/), and got a ton of really good feedback, so I’m going to sort through that here.