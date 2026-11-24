'use strict';

const { createElement, forwardRef } = require('react');

const HeadphonesOff = forwardRef(function HeadphonesOff(
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
    createElement('path', {"d":"M19 12C20.105 12 21 12.895 21 14L21 19C21 20.105 20.105 21 19 21C17.895 21 17 20.105 17 19L17 14C17 12.895 17.895 12 19 12Z","key":"0"}),
    createElement('path', {"d":"M22 3L2 20","key":"1"}),
    createElement('path', {"d":"M3 14L3.031 12.32C3.031 7.359 7.055 3.336 12.016 3.336C14.527 3.336 16.801 4.371 18.434 6.031","key":"2"}),
    createElement('path', {"d":"M20.168 8.543C20.703 9.691 21 10.973 21 12.32L21 14","key":"3"}),
    createElement('path', {"d":"M3.004 19.145C3 19.098 3 19.051 3 19L3 14C3 12.895 3.895 12 5 12C6.105 12 7 12.895 7 14L7 15.75","key":"4"}),
    createElement('path', {"d":"M7 18.75L7 19C7 20.105 6.105 21 5 21C4.809 21 4.621 20.973 4.445 20.922","key":"5"})
  );
});

HeadphonesOff.displayName = 'HeadphonesOff';

module.exports = HeadphonesOff;
module.exports.HeadphonesOff = HeadphonesOff;
module.exports.default = HeadphonesOff;
