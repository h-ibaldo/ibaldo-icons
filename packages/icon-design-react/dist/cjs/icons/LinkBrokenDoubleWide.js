'use strict';

const { createElement, forwardRef } = require('react');

const LinkBrokenDoubleWide = forwardRef(function LinkBrokenDoubleWide(
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
    createElement('path', {"d":"M8 11.773C6.914 11.766 5.828 12.172 5 13L3.242 14.758C1.586 16.414 1.586 19.098 3.242 20.754L3.246 20.758C4.902 22.414 7.586 22.414 9.242 20.758L11 19C11.828 18.172 12.234 17.086 12.227 16","key":"0"}),
    createElement('path', {"d":"M16 12.227C17.086 12.234 18.172 11.828 19 11L20.758 9.242C22.414 7.586 22.414 4.902 20.758 3.246L20.754 3.242C19.098 1.586 16.414 1.586 14.758 3.242L13 5C12.172 5.828 11.766 6.914 11.773 8","key":"1"}),
    createElement('path', {"d":"M5 8L2 7","key":"2"}),
    createElement('path', {"d":"M8 5L7 2","key":"3"}),
    createElement('path', {"d":"M19 16L22 17","key":"4"}),
    createElement('path', {"d":"M16 19L17 22","key":"5"})
  );
});

LinkBrokenDoubleWide.displayName = 'LinkBrokenDoubleWide';

module.exports = LinkBrokenDoubleWide;
module.exports.LinkBrokenDoubleWide = LinkBrokenDoubleWide;
module.exports.default = LinkBrokenDoubleWide;
