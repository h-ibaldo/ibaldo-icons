'use strict';

const { createElement, forwardRef } = require('react');

const CommandSquareShadow = forwardRef(function CommandSquareShadow(
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
    createElement('path', {"d":"M9 13.5L9 7.5C9 6.672 8.328 6 7.5 6C6.672 6 6 6.672 6 7.5C6 8.328 6.672 9 7.5 9L13.5 9C14.328 9 15 8.328 15 7.5C15 6.672 14.328 6 13.5 6C12.672 6 12 6.672 12 7.5L12 13.5C12 14.328 12.672 15 13.5 15C14.328 15 15 14.328 15 13.5C15 12.672 14.328 12 13.5 12L7.5 12C6.672 12 6 12.672 6 13.5C6 14.328 6.672 15 7.5 15C8.328 15 9 14.328 9 13.5Z","key":"0"}),
    createElement('path', {"d":"M16 19L5 19C3.344 19 2 17.656 2 16L2 5C2 3.344 3.344 2 5 2L16 2C17.656 2 19 3.344 19 5L19 16C19 17.656 17.656 19 16 19Z","key":"1"}),
    createElement('path', {"d":"M22 8L22 19C22 20.656 20.656 22 19 22L8 22","key":"2"})
  );
});

CommandSquareShadow.displayName = 'CommandSquareShadow';

module.exports = CommandSquareShadow;
module.exports.CommandSquareShadow = CommandSquareShadow;
module.exports.default = CommandSquareShadow;
