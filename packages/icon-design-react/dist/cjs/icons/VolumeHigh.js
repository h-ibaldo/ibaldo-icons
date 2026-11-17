'use strict';

const { createElement, forwardRef } = require('react');

const VolumeHigh = forwardRef(function VolumeHigh(
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
    createElement('path', {"d":"M14.828 14.828C15.551 14.105 16 13.105 16 12C16 10.895 15.551 9.895 14.828 9.172","key":"0"}),
    createElement('path', {"d":"M16.949 16.949C18.215 15.684 19 13.934 19 12C19 10.066 18.215 8.316 16.949 7.051","key":"1"}),
    createElement('path', {"d":"M19.07 19.07C20.883 17.262 22 14.762 22 12C22 9.238 20.883 6.738 19.07 4.93","key":"2"}),
    createElement('path', {"d":"M2 10L2 14C2 14.555 2.449 15 3 15L5 15L10.348 19.586C10.996 20.141 12 19.68 12 18.824L12 5.176C12 4.32 10.996 3.859 10.348 4.414L5 9L3 9C2.449 9 2 9.445 2 10Z","key":"3"})
  );
});

VolumeHigh.displayName = 'VolumeHigh';

module.exports = VolumeHigh;
module.exports.VolumeHigh = VolumeHigh;
module.exports.default = VolumeHigh;
