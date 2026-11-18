'use strict';

const { createElement, forwardRef } = require('react');

const TagDotsCircleRound = forwardRef(function TagDotsCircleRound(
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
    createElement('path', {"d":"M6.5 8C6.223 8 6 7.777 6 7.5C6 7.223 6.223 7 6.5 7C6.777 7 7 7.223 7 7.5C7 7.777 6.777 8 6.5 8Z","key":"0"}),
    createElement('path', {"d":"M15.313 7.313L11.586 3.586C11.211 3.211 10.703 3 10.172 3L4 3C2.895 3 2 3.895 2 5L2 11.172C2 11.703 2.211 12.211 2.586 12.586L10.586 20.586C11.367 21.367 12.633 21.367 13.414 20.586L17 17","key":"1"}),
    createElement('path', {"d":"M12 12C12 9.238 14.238 7 17 7C19.762 7 22 9.238 22 12C22 14.762 19.762 17 17 17C14.238 17 12 14.762 12 12Z","key":"2"}),
    createElement('path', {"d":"M15.5 12L15.5 12","key":"3"}),
    createElement('path', {"d":"M18.5 12L18.5 12","key":"4"})
  );
});

TagDotsCircleRound.displayName = 'TagDotsCircleRound';

module.exports = TagDotsCircleRound;
module.exports.TagDotsCircleRound = TagDotsCircleRound;
module.exports.default = TagDotsCircleRound;
