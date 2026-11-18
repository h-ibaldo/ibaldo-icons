'use strict';

const { createElement, forwardRef } = require('react');

const LinkMenuBracket = forwardRef(function LinkMenuBracket(
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
    createElement('path', {"d":"M9 22L7 22C4.238 22 2 19.762 2 17C2 14.238 4.238 12 7 12L9 12","key":"0"}),
    createElement('path', {"d":"M15 12L17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22L15 22","key":"1"}),
    createElement('path', {"d":"M8 17L16 17","key":"2"}),
    createElement('path', {"d":"M2 2L9 2","key":"3"}),
    createElement('path', {"d":"M2 5L9 5","key":"4"}),
    createElement('path', {"d":"M2 8L6 8","key":"5"})
  );
});

LinkMenuBracket.displayName = 'LinkMenuBracket';

module.exports = LinkMenuBracket;
module.exports.LinkMenuBracket = LinkMenuBracket;
module.exports.default = LinkMenuBracket;
