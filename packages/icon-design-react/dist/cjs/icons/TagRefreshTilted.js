'use strict';

const { createElement, forwardRef } = require('react');

const TagRefreshTilted = forwardRef(function TagRefreshTilted(
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
    createElement('path', {"d":"M7 17L2.707 12.707C2.316 12.316 2.316 11.684 2.707 11.293L11.707 2.293C11.895 2.105 12.148 2 12.414 2L18 2C18.551 2 19 2.449 19 3L19 8.086","key":"0"}),
    createElement('path', {"d":"M14.5 7C14.777 7 15 6.777 15 6.5C15 6.223 14.777 6 14.5 6C14.223 6 14 6.223 14 6.5C14 6.777 14.223 7 14.5 7Z","key":"1"}),
    createElement('path', {"d":"M11 13L11 16L14 16","key":"2"}),
    createElement('path', {"d":"M12.102 16C12.563 13.719 14.582 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C15.371 22 13.938 21.207 13.023 20","key":"3"})
  );
});

TagRefreshTilted.displayName = 'TagRefreshTilted';

module.exports = TagRefreshTilted;
module.exports.TagRefreshTilted = TagRefreshTilted;
module.exports.default = TagRefreshTilted;
