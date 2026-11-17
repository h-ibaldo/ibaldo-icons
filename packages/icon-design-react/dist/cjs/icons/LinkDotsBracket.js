'use strict';

const { createElement, forwardRef } = require('react');

const LinkDotsBracket = forwardRef(function LinkDotsBracket(
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
    createElement('path', {"d":"M9 19L7 19C4.238 19 2 16.762 2 14C2 11.238 4.238 9 7 9L9 9","key":"0"}),
    createElement('path', {"d":"M15 9L17 9C19.762 9 22 11.238 22 14C22 16.762 19.762 19 17 19L15 19","key":"1"}),
    createElement('path', {"d":"M8 14L16 14","key":"2"}),
    createElement('path', {"d":"M3 4L3 4","key":"3"}),
    createElement('path', {"d":"M7 4L7 4","key":"4"})
  );
});

LinkDotsBracket.displayName = 'LinkDotsBracket';

module.exports = LinkDotsBracket;
module.exports.LinkDotsBracket = LinkDotsBracket;
module.exports.default = LinkDotsBracket;
