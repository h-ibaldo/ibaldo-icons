'use strict';

const { createElement, forwardRef } = require('react');

const LinkCircleCheckClip = forwardRef(function LinkCircleCheckClip(
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
    createElement('path', {"d":"M15 13L16.5 11.5C17.605 10.395 17.605 8.605 16.5 7.5C15.395 6.395 13.605 6.395 12.5 7.5L11 9","key":"0"}),
    createElement('path', {"d":"M9 11L7.5 12.5C6.395 13.605 6.395 15.395 7.5 16.5C8.605 17.605 10.395 17.605 11.5 16.5L13 15","key":"1"}),
    createElement('path', {"d":"M21.801 14C21.93 13.355 22 12.688 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.352 21.93 14 21.801","key":"2"}),
    createElement('path', {"d":"M17 19L19 21L22 18","key":"3"}),
    createElement('path', {"d":"M11 13L13 11","key":"4"})
  );
});

LinkCircleCheckClip.displayName = 'LinkCircleCheckClip';

module.exports = LinkCircleCheckClip;
module.exports.LinkCircleCheckClip = LinkCircleCheckClip;
module.exports.default = LinkCircleCheckClip;
