'use strict';

const { createElement, forwardRef } = require('react');

const VolumeMediumWide = forwardRef(function VolumeMediumWide(
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
    createElement('path', {"d":"M17.457 16.914C19.262 16.012 20.5 14.152 20.5 12C20.5 9.848 19.262 7.988 17.457 7.086","key":"0"}),
    createElement('path', {"d":"M16 13.707C16.594 13.359 17 12.734 17 12C17 11.266 16.594 10.641 16 10.293","key":"1"}),
    createElement('path', {"d":"M4 10L4 14C4 14.555 4.445 15 5 15L7 15L11.293 19.293C11.922 19.922 13 19.477 13 18.586L13 5.414C13 4.523 11.922 4.078 11.293 4.707L7 9L5 9C4.445 9 4 9.445 4 10Z","key":"2"})
  );
});

VolumeMediumWide.displayName = 'VolumeMediumWide';

module.exports = VolumeMediumWide;
module.exports.VolumeMediumWide = VolumeMediumWide;
module.exports.default = VolumeMediumWide;
