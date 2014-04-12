---
layout: almanac
title: a
date: 2014-04-10 9:31:00
---

SVG provides an ‘a’ element. Just like its HTML counterpart, the ‘a’ tag (which stands for anchor) links one webpage with another webpage. By default an ‘a’ tag can contain any other SVG element.

## Gotchas

If you’re using an `xlink:href` you need to declare the `xmlns:xlink` namespace (like the example below).

## Example

{% highlight xml %}

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<a xlink:href="http://google.com/">
		<rect width="30" height="30" />
	</a>
</svg>

{% endhighlight %}