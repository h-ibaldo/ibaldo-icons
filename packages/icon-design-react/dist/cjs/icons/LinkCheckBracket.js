'use strict';

const { createElement, forwardRef } = require('react');

const LinkCheckBracket = forwardRef(function LinkCheckBracket(
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
    createElement('path', {"d":"M9 14L7 14C4.238 14 2 11.762 2 9C2 6.238 4.238 4 7 4L9 4","key":"0"}),
    createElement('path', {"d":"M15 4L17 4C19.762 4 22 6.238 22 9C22 11.762 19.762 14 17 14L15 14","key":"1"}),
    createElement('path', {"d":"M8 9L16 9","key":"2"}),
    createElement('path', {"d":"M16 20L18 22L22 18","key":"3"})
  );
});

LinkCheckBracket.displayName = 'LinkCheckBracket';

module.exports = LinkCheckBracket;
module.exports.LinkCheckBracket = LinkCheckBracket;
module.exports.default = LinkCheckBracket;
