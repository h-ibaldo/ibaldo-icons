'use strict';

const { createElement, forwardRef } = require('react');

const LinkMinusClip = forwardRef(function LinkMinusClip(
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
    createElement('path', {"d":"M8 16L16 8","key":"0"}),
    createElement('path', {"d":"M11 6L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L18 13","key":"1"}),
    createElement('path', {"d":"M13 18L10.5 20.5C8.566 22.434 5.434 22.434 3.5 20.5C1.566 18.566 1.566 15.434 3.5 13.5L6 11","key":"2"}),
    createElement('path', {"d":"M22 19.5L17 19.5","key":"3"})
  );
});

LinkMinusClip.displayName = 'LinkMinusClip';

module.exports = LinkMinusClip;
module.exports.LinkMinusClip = LinkMinusClip;
module.exports.default = LinkMinusClip;
