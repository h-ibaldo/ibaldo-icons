'use strict';

const { createElement, forwardRef } = require('react');

const TagOffSquareTilted = forwardRef(function TagOffSquareTilted(
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
    createElement('path', {"d":"M9.5 9.5L9.5 9.5","key":"1"}),
    createElement('path', {"d":"M20.535 3.465L3.465 20.535","key":"2"}),
    createElement('path', {"d":"M9.5 14.5L12.793 17.793C13.184 18.184 13.816 18.184 14.207 17.793L17.793 14.207C18.184 13.816 18.184 13.184 17.793 12.793L14.5 9.5","key":"3"}),
    createElement('path', {"d":"M12.535 7.535L11.793 6.793C11.605 6.605 11.352 6.5 11.086 6.5L7.5 6.5C6.949 6.5 6.5 6.949 6.5 7.5L6.5 11.086C6.5 11.352 6.605 11.605 6.793 11.793L7.535 12.535","key":"4"})
  );
});

TagOffSquareTilted.displayName = 'TagOffSquareTilted';

module.exports = TagOffSquareTilted;
module.exports.TagOffSquareTilted = TagOffSquareTilted;
module.exports.default = TagOffSquareTilted;
