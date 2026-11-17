'use strict';

const { createElement, forwardRef } = require('react');

const TagSquareTilted = forwardRef(function TagSquareTilted(
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
    createElement('path', {"d":"M22 15L22 17C22 19.762 19.762 22 17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L9 2","key":"0"}),
    createElement('path', {"d":"M22 4L22 8.172C22 8.703 21.789 9.211 21.414 9.586L15.414 15.586C14.633 16.367 13.367 16.367 12.586 15.586L8.414 11.414C7.633 10.633 7.633 9.367 8.414 8.586L14.414 2.586C14.789 2.211 15.297 2 15.828 2L20 2C21.105 2 22 2.895 22 4Z","key":"1"}),
    createElement('path', {"d":"M17.5 7C17.777 7 18 6.777 18 6.5C18 6.223 17.777 6 17.5 6C17.223 6 17 6.223 17 6.5C17 6.777 17.223 7 17.5 7Z","key":"2"})
  );
});

TagSquareTilted.displayName = 'TagSquareTilted';

module.exports = TagSquareTilted;
module.exports.TagSquareTilted = TagSquareTilted;
module.exports.default = TagSquareTilted;
