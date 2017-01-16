'use strict';
/* eslint-env node */

module.exports = function FallbackCursors(fallbacks) {
	return function(css) {
		css.walkRules(function(rule) {
			var alreadyReplaced = {};
			rule.each(function(decl) {
				if (decl.prop !== 'cursor') {
					return;
				}
				if (/^\s*url\s*\(/i.test(decl.value)) {
					return;
				}
				var stdCursor = decl.value.replace(/^-\w+-/, '');
				if (alreadyReplaced[stdCursor]) {
					return;
				}
				if (!fallbacks[stdCursor]) {
					return;
				}
				decl.cloneBefore({ value: fallbacks[stdCursor] });
				alreadyReplaced[stdCursor] = true;
			});
		});
	};
};
