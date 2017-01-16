Fallback cursors plugin that plays nicely with Webpack LESS-loader and Autoprefixer.

## Usage

```js
const FallbackCursors = require('postcss-fallback-cursors');
FallbackCursors({
	'grabbing': 'url("path/to/grabbing.cur"), move'
});

/* add to PostCSS plugins */
```

so

```css
.grabbing {
	cursor: grabbing;
}
```

becomes:

```css
.grabbing {
	cursor: url("path/to/grabbing.cur"), move;
	cursor: grabbing;
}
```

or maybe if you're using Autoprefixer:

```css
.grabbing {
	cursor: url("path/to/grabbing.cur"), move;
	cursor: -webkit-grabbing;
	cursor: grabbing;
}
```

## API status

This module was created for the needs I have at the moment, and it doesn't account for edge cases.

So, this module API is not stable. It will wery likely be changed in the future.

I'm open for the suggestions and PRs even if those changes are breaking as hell.
