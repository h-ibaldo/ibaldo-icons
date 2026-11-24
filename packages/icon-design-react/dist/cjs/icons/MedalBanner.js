'use strict';

const { createElement, forwardRef } = require('react');

const MedalBanner = forwardRef(function MedalBanner(
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
    createElement('path', {"d":"M17 16C17 18.762 14.762 21 12 21C9.238 21 7 18.762 7 16C7 13.238 9.238 11 12 11C14.762 11 17 13.238 17 16Z","key":"0"}),
    createElement('path', {"d":"M12 9L4 6L4 2L20 2L20 6Z","key":"1"})
  );
});

MedalBanner.displayName = 'MedalBanner';

module.exports = MedalBanner;
module.exports.MedalBanner = MedalBanner;
module.exports.default = MedalBanner;
