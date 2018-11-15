# Loading JavaScript on Document Load

## Learning Goals

- Why DOMContentLoaded is important?
- Set up an event on DOMContentLoaded
- Reiterate separation of concerns for JavaScript

## Introduction

An important part of working with JavaScript is ensuring that your code
runs at the right time. Every now and then, you may have to add some extra
code to ensure your code doesn't run before the page is ready. There are
many factors that go into determining the "right time". There are two
events that represent the two milestones while your page loads. The
`DOMContentLoaded` event fires at when your page's DOM is fully parsed.
The `load` event fires once your page has _fully_ loaded. However, in
this lesson, we'll be focusing on `DOMContentLoaded`.

### Why is DOMContentLoaded is Important?

The browser has a built-in way to determine when a page is loaded. The
`DOMContentLoaded` event is triggered when the page’s DOM is ready--or
finished loading. This means style and HTML is ready to receive requests
from JavaScript.

```js
document.addEventListener("DOMContentLoaded", domLoaded, false);

function domLoaded(event) {
    alert("The DOM has loaded");
}
```

### Set Up an Event on DOMContentLoaded

You'll be coding in `index.js`. In `index.js`, we need to set up a
`DOMContentLoaded` event in order to detect when our HTML page has
loaded, and the document is ready to be manipulated. Use the event
to target the paragraph with `id="text"` and replace the text with
"This is really cool!" Once you have confirmed that this working by
viewing the results in `index.html`, let's create a wrapper for this
function called `domContentLoaded` and run the tests.

### Reiterate Separation of Concerns for JavaScript

We usually want to avoid writing our JavaScript inside our HTML
files. For the same reasons that we want to separate out our CSS
from our HTML, we want to separate out our JavaScript from our HTML,
too. When code is well-separated, individual code can be reused,
modified, maintained, and debugged easier. To ensure proper load
order of all of the code, place your external stylesheets in the
`<head>` of your HTML document and your external JavaScript before the
losing `<body>` tag. This approach forces the JavaScript to execute only
after the CSS and HTML body have been loaded. If you are placing stylesheets
in the header and JavaScript at the end of the HTML document, your DOM will
load all everything before the `DOMContentLoaded` event is fired.

## Conclusion

In many cases, you'll want to execute events as soon as a page loads.
The DOMContentLoaded event is a useful event that can make a big impact
on the performance of your pages, as well as it'll be useful in a number
of scenarios for user interaction and content manipulation.

## Resources
[Running Your Code at the Right Time](https://www.kirupa.com/html5/running_your_code_at_the_right_time.htm)
