'use strict';

const { createElement, forwardRef } = require('react');

const TagOffRound = forwardRef(function TagOffRound(
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
    createElement('path', {"d":"M7.5 8C7.223 8 7 7.777 7 7.5C7 7.223 7.223 7 7.5 7C7.777 7 8 7.223 8 7.5C8 7.777 7.777 8 7.5 8Z","key":"0"}),
    createElement('path', {"d":"M19 5L4.5 19.5","key":"1"}),
    createElement('path', {"d":"M7.5 16.5L11.586 20.586C12.367 21.367 13.633 21.367 14.414 20.586L20.586 14.414C21.367 13.633 21.367 12.367 20.586 11.586L16.5 7.5","key":"2"}),
    createElement('path', {"d":"M13.75 4.75L12.586 3.586C12.211 3.211 11.703 3 11.172 3L5 3C3.895 3 3 3.895 3 5L3 11.172C3 11.703 3.211 12.211 3.586 12.586L4.75 13.75","key":"3"})
  );
});

TagOffRound.displayName = 'TagOffRound';

module.exports = TagOffRound;
module.exports.TagOffRound = TagOffRound;
module.exports.default = TagOffRound;
