'use strict';

const { createElement, forwardRef } = require('react');

const LinkXBracket = forwardRef(function LinkXBracket(
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
    createElement('path', {"d":"M9 13L7 13C4.238 13 2 10.762 2 8C2 5.238 4.238 3 7 3L9 3","key":"0"}),
    createElement('path', {"d":"M15 3L17 3C19.762 3 22 5.238 22 8C22 10.762 19.762 13 17 13L15 13","key":"1"}),
    createElement('path', {"d":"M8 8L16 8","key":"2"}),
    createElement('path', {"d":"M18 21L22 17","key":"3"}),
    createElement('path', {"d":"M18 17L22 21","key":"4"})
  );
});

LinkXBracket.displayName = 'LinkXBracket';

module.exports = LinkXBracket;
module.exports.LinkXBracket = LinkXBracket;
module.exports.default = LinkXBracket;
