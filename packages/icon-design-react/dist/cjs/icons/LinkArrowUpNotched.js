'use strict';

const { createElement, forwardRef } = require('react');

const LinkArrowUpNotched = forwardRef(function LinkArrowUpNotched(
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
    createElement('path', {"d":"M8 8L16 16","key":"0"}),
    createElement('path', {"d":"M13.004 13.004L13.004 13C14.66 11.344 17.344 11.344 19 13L20.758 14.758C22.414 16.414 22.414 19.098 20.758 20.754L20.754 20.758C19.098 22.414 16.414 22.414 14.758 20.758L13 19C12.113 18.113 11.719 16.938 11.777 15.777","key":"1"}),
    createElement('path', {"d":"M8.219 12.219C7.063 12.281 5.883 11.883 5 11L3.242 9.242C1.586 7.586 1.586 4.902 3.242 3.246L3.246 3.242C4.902 1.586 7.586 1.586 9.242 3.242L11 5C12.656 6.656 12.656 9.34 11 10.996L10.996 10.996","key":"2"}),
    createElement('path', {"d":"M22.004 4L20.004 2L18.004 4","key":"3"}),
    createElement('path', {"d":"M20.004 8L20.004 2","key":"4"})
  );
});

LinkArrowUpNotched.displayName = 'LinkArrowUpNotched';

module.exports = LinkArrowUpNotched;
module.exports.LinkArrowUpNotched = LinkArrowUpNotched;
module.exports.default = LinkArrowUpNotched;
