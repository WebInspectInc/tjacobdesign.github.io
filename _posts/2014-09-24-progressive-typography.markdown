---
layout: post
title: "Progressive Typography"
date: 2014-9-24
css: /css/post/responsive-type.css
hasComments: true
---

We’ve still got a long way to go, but we’re getting pretty good at progressive enhancement these days. We’ve got tons of hacks for dealing with older technology. [Modernizr](http://modernizr.com/) has been a thing for a long time (and is moving into the browser now with [@supports](http://davidwalsh.name/css-supports)), we’re designing for all different screen sizes with [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design), we’re getting [responsive images](http://css-tricks.com/on-responsive-images/) soon, and we’ve even got tools like [Autoprefixer](https://github.com/postcss/autoprefixer) that take a lot of the work out of supporting older browsers.

There’s a piece missing though, and since [the web is 95% typography](http://ia.net/blog/the-web-is-all-about-typography-period) it’s a pretty important piece: we’re missing fonts.

## The Path to Font Perfection

Fonts are one of the hardest things to progressively enhance, mainly because of how browsers handle `@font-face`. Browsers nowadays *don’t show any fonts* until `@font-face` has been given a chance to download its font file. I imagine that the people who programmed the browsers figured we wouldn’t want <abbr title="Flash of Unstyled Text">FOUT</abbr>, so they decided to do it the way it works now.

Unfortunately font-files are big, and that means the user could see a blank page for up to *five seconds* before that font actually succeeds or fails, five seconds that a lot of people aren’t willing to wait.

> 1 second is about the limit for the user’s *flow of thought* to stay uninterrupted. <br/>- [Jakob Nielson](http://www.nngroup.com/articles/response-times-3-important-limits/)

So what is a poor web devigner to do? You have three options:

* Avoid using `@font-face`, and use one of the [~46 web-safe fonts](http://cssfontstack.com).
* Ignore it. (“it'll only happen once,” you say, “otherwise browsers will cache”)
* Use fallbacks. Spoiler alert: this is the best option.

## Falling Backwards

Font falling back isn’t super difficult, but like most any enhancement it takes some thought to do correctly. Here’s how it should work:

1. Page uses fonts that most every system has (one of the [web safe fonts](http://cssfontstack.com))
1. Page tries to load nicer fonts.
1. If page succeeds, use those. If not then the user can just keep reading, little harm done.

The first step is simple enough. Let’s use this blog post as an example, I’ve set the headers in [Aleo](http://www.fontsquirrel.com/fonts/aleo) and the body copy in [Lato](http://www.fontsquirrel.com/fonts/lato). I see that [Baskerville](https://en.wikipedia.org/wiki/Baskerville) is pretty similar to Aleo, and [Trebuchet MS](https://en.wikipedia.org/wiki/Trebuchet_MS) is fairly similar to Lato, so those will be my two backup fonts. That CSS would look like this:

```css
h1, h2, h3, h4, h5, h6 {
    font-family: Baskerville, serif;
}
p {
    font-family: Trebuchet MS, sans-serif;
    letter-spacing: -0.3px;
}
```

Pretty standard CSS here, pretty much just setting the font family. You may want more than just one fallback font, because a lot of computers probably won’t have Baskerville, but I’m sticking with that for simplicity.

As for the letter spacing, I noticed that the kerning on Trebuchet is a little bit looser than the kerning on Lato, so I tuned it down a bit. If you scroll to the top of the article and click the button in the upper right, you’ll see that the body copy takes up the same amount of space, and most of the line breaks are in the same place. (ftw!)

### Google Webfont Loader

As for the second step, we’re going to use the [Google Webfont Loader](https://developers.google.com/fonts/docs/webfont_loader). It isn’t essential, but it *does* make things a whole lot easier, and it’s a pretty small script to include for the huge bang it adds to your page. I’m loading Aleo and Lato from my server (locally), so my JavaScript looks like this:

{% highlight javascript %}
WebFont.load({
    custom: {
        families: ['Lato', 'Aleo']
    }
})
{% endhighlight %}

And to my CSS I added this:

```css
.wf-active h1 {
	font-family: Lato;
}
.wf-active p {
	font-family: Aleo;
}

@font-face {
	font-family: Lato;
	/* source files go here */
}
@font-face {
	font-family: Aleo;
	/* more source files */
}
```

And that’s all there is to it. The webfont loader automatically listens for the font files to finish downloading, adds the `wf-active` class to the html tag, and the browser automatically switches the fonts over to the right ones. <button type="button" id="toggle_fonts" class="toggle-button">Switch to fallback mode</button>

## An Important Note

The most important part is the top of the page, because it’s the most likely spot for the user to experience <abbr title="Flash of Unstyled Text">FOUT</abbr>. So focus on keeping the fonts similar at the top, and the rest of the page will follow through just fine.


<script src="//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
<script>
WebFont.load({
	custom: {
		families: ['Lato', 'Aleo']
	}
});
(function() {
	var button = document.getElementById('toggle_fonts');
	var body = document.querySelector('html');
	button.addEventListener('click', function() {
		if (body.classList.contains('wf-active')) {
			body.classList.remove('wf-active');
			button.innerHTML = 'Switch to font-face mode';
		} else {
			body.classList.add('wf-active');
			button.innerHTML = 'Switch to fallback mode';
		}
	});
})()
</script>