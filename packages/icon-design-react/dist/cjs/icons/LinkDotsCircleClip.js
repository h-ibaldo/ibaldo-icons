'use strict';

const { createElement, forwardRef } = require('react');

const LinkDotsCircleClip = forwardRef(function LinkDotsCircleClip(
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
    createElement('path', {"d":"M13 10L14.965 8.035C16.344 6.656 16.344 4.414 14.965 3.035C13.586 1.656 11.344 1.656 9.965 3.035L8 5","key":"0"}),
    createElement('path', {"d":"M5 8L3.035 9.965C1.656 11.348 1.656 13.586 3.035 14.965C4.414 16.348 6.656 16.348 8.035 14.965L10 13","key":"1"}),
    createElement('path', {"d":"M11 7L7 11","key":"2"}),
    createElement('path', {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z","key":"3"}),
    createElement('path', {"d":"M15.5 17L15.5 17","key":"4"}),
    createElement('path', {"d":"M18.5 17L18.5 17","key":"5"})
  );
});

LinkDotsCircleClip.displayName = 'LinkDotsCircleClip';

module.exports = LinkDotsCircleClip;
module.exports.LinkDotsCircleClip = LinkDotsCircleClip;
module.exports.default = LinkDotsCircleClip;
