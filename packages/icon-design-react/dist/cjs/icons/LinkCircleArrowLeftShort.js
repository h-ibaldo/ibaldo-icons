'use strict';

const { createElement, forwardRef } = require('react');

const LinkCircleArrowLeftShort = forwardRef(function LinkCircleArrowLeftShort(
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
    createElement('path', {"d":"M18 18L16 20L18 22","key":"0"}),
    createElement('path', {"d":"M22 20L16 20","key":"1"}),
    createElement('path', {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 13.047 21.84 14.055 21.539 15","key":"2"}),
    createElement('path', {"d":"M15.172 12.828C16.277 11.723 16.277 9.934 15.172 8.828C14.066 7.723 12.277 7.723 11.172 8.828","key":"3"}),
    createElement('path', {"d":"M8.828 11.172C7.723 12.277 7.723 14.066 8.828 15.172C9.934 16.277 11.723 16.277 12.828 15.172","key":"4"}),
    createElement('path', {"d":"M11.328 12.672L12.672 11.328","key":"5"})
  );
});

LinkCircleArrowLeftShort.displayName = 'LinkCircleArrowLeftShort';

module.exports = LinkCircleArrowLeftShort;
module.exports.LinkCircleArrowLeftShort = LinkCircleArrowLeftShort;
module.exports.default = LinkCircleArrowLeftShort;
