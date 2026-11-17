'use strict';

const { createElement, forwardRef } = require('react');

const LinkArrowUpClip2 = forwardRef(function LinkArrowUpClip2(
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
    createElement('path', {"d":"M14 14L15.965 15.965C17.344 17.344 17.344 19.586 15.965 20.965C14.586 22.344 12.344 22.344 10.965 20.965L9 19","key":"0"}),
    createElement('path', {"d":"M6 16L4.035 14.035C2.656 12.652 2.656 10.414 4.035 9.035C5.414 7.652 7.656 7.652 9.035 9.035L11 11","key":"1"}),
    createElement('path', {"d":"M12 17L8 13","key":"2"}),
    createElement('path', {"d":"M20 5L17 2L14 5","key":"3"}),
    createElement('path', {"d":"M17 10L17 2","key":"4"})
  );
});

LinkArrowUpClip2.displayName = 'LinkArrowUpClip2';

module.exports = LinkArrowUpClip2;
module.exports.LinkArrowUpClip2 = LinkArrowUpClip2;
module.exports.default = LinkArrowUpClip2;
