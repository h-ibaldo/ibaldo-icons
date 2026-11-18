'use strict';

const { createElement, forwardRef } = require('react');

const LinkSplitSquare = forwardRef(function LinkSplitSquare(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M16 11L16.5 10.5C17.328 9.672 17.328 8.328 16.5 7.5C15.672 6.672 14.328 6.672 13.5 7.5L13 8","key":"1"}),
    createElement('path', {"d":"M8 13L7.5 13.5C6.672 14.328 6.672 15.672 7.5 16.5C8.328 17.328 9.672 17.328 10.5 16.5L11 16","key":"2"}),
    createElement('path', {"d":"M8 8L10 10","key":"3"}),
    createElement('path', {"d":"M14 14L16.5 16.5","key":"4"})
  );
});

LinkSplitSquare.displayName = 'LinkSplitSquare';

module.exports = LinkSplitSquare;
module.exports.LinkSplitSquare = LinkSplitSquare;
module.exports.default = LinkSplitSquare;
