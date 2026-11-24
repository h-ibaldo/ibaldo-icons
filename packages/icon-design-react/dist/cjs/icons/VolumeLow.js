'use strict';

const { createElement, forwardRef } = require('react');

const VolumeLow = forwardRef(function VolumeLow(
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
    createElement('path', {"d":"M17.828 14.828C18.551 14.105 19 13.105 19 12C19 10.895 18.551 9.895 17.828 9.172","key":"0"}),
    createElement('path', {"d":"M5 10L5 14C5 14.555 5.449 15 6 15L8 15L13.348 19.586C13.996 20.141 15 19.68 15 18.824L15 5.176C15 4.32 13.996 3.859 13.348 4.414L8 9L6 9C5.449 9 5 9.445 5 10Z","key":"1"})
  );
});

VolumeLow.displayName = 'VolumeLow';

module.exports = VolumeLow;
module.exports.VolumeLow = VolumeLow;
module.exports.default = VolumeLow;
