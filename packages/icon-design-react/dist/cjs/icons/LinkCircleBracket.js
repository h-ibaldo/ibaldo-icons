'use strict';

const { createElement, forwardRef } = require('react');

const LinkCircleBracket = forwardRef(function LinkCircleBracket(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M10 15L9 15C7.344 15 6 13.656 6 12C6 10.344 7.344 9 9 9L10 9","key":"1"}),
    createElement('path', {"d":"M14 9L15 9C16.656 9 18 10.344 18 12C18 13.656 16.656 15 15 15L14 15","key":"2"}),
    createElement('path', {"d":"M10 12L14 12","key":"3"})
  );
});

LinkCircleBracket.displayName = 'LinkCircleBracket';

module.exports = LinkCircleBracket;
module.exports.LinkCircleBracket = LinkCircleBracket;
module.exports.default = LinkCircleBracket;
