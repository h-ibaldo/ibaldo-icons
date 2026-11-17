'use strict';

const { createElement, forwardRef } = require('react');

const LinkRaysFlat = forwardRef(function LinkRaysFlat(
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
    createElement('path', {"d":"M6.5 11C4.016 11 2 13.016 2 15.5C2 17.984 4.016 20 6.5 20L10.5 20C12.984 20 15 17.984 15 15.5C15 15.328 14.973 15.164 14.949 15","key":"0"}),
    createElement('path', {"d":"M17.5 20C19.984 20 22 17.984 22 15.5C22 13.016 19.984 11 17.5 11L13.5 11C11.016 11 9 13.016 9 15.5C9 15.672 9.027 15.836 9.047 16","key":"1"}),
    createElement('path', {"d":"M11 3L11 5","key":"2"}),
    createElement('path', {"d":"M5.758 4.758L7.172 6.172","key":"3"}),
    createElement('path', {"d":"M16.414 4.758L15 6.172","key":"4"})
  );
});

LinkRaysFlat.displayName = 'LinkRaysFlat';

module.exports = LinkRaysFlat;
module.exports.LinkRaysFlat = LinkRaysFlat;
module.exports.default = LinkRaysFlat;
