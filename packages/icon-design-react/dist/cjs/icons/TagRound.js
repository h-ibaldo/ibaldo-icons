'use strict';

const { createElement, forwardRef } = require('react');

const TagRound = forwardRef(function TagRound(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M3 5L3 11.172C3 11.703 3.211 12.211 3.586 12.586L11.586 20.586C12.367 21.367 13.633 21.367 14.414 20.586L20.586 14.414C21.367 13.633 21.367 12.367 20.586 11.586L12.586 3.586C12.211 3.211 11.703 3 11.172 3L5 3C3.895 3 3 3.895 3 5Z","key":"0"}),
    createElement('path', {"d":"M7.5 8C7.223 8 7 7.777 7 7.5C7 7.223 7.223 7 7.5 7C7.777 7 8 7.223 8 7.5C8 7.777 7.777 8 7.5 8Z","key":"1"})
  );
});

TagRound.displayName = 'TagRound';

module.exports = TagRound;
module.exports.TagRound = TagRound;
module.exports.default = TagRound;
