---
layout: post
title: "Accessible Hamburger Icons"
date: 2014-5-01 6:30:00
---

Navigation on the web is hard. Even for a small site with only a handful of pages, navigation creates a challenge worthy of even the most experienced devigner. From the design side, it's hard to have a list of items display correctly when the screen is 2000px wide versus 320px wide. It's not that hard from the developer's perspective, at least not from a purely functional perspective. Try and add a design to it though, and we're in trouble, designers. It's like squeezing an elephant into an urn; even if it does work, the only thing anyone expects to see inside is ashes.

## How the Hamburger Icon Came to Be

Hamburger icons are the main way designers solve this problem. You have your giant list of icons in a row on a big screen, and when the screen starts to squish them you simply hide the icons, and show them when the use clicks a tiny little three-line icon in the top right (or left) corner. I don't think anyone will say it's the perfect (or even ideal) solution, but it covers as many of the bases as anyone can figure out how to cover at the moment. But is there a better way? Maybe. We're going to stick with the hamburger for now though, and I'll show you how you to handle that while wearing your developer cap.

## And There Was Semantics

It's kind of rotton that HTML is responsible for accessibility, because it's such a limited language in so many ways. The fact that we need a `<div>` tag, a tag that means “ignore me, I’m just here for styling purposes” is kind of sad. Fortunately CSS gives us a *tiny* bit of insight into how we can solve this problem, but only because screen readers are able to use CSS in that way, not because CSS was designed for that purpose. We can use that to our benefit though, by hiding and showing only the HTML that needs to be seen.

## My Proposal

Let's work out a typical hamburger icon scenario. On desktop layout you’ll need something like this:

{ insert image of a pretty complex desktop layout here }

Whereas mobile gets something like this:

{ image of hamburger icon on mobile }

Bit of a difference there, right? Of course you also need to see the open hamburger menu, which looks like this:

{ another thingey }

Now that may not win any design awards, but it would work just fine. How the heck do we program that sort of thing? First let's break it down into pieces. Here's how I look at this:
