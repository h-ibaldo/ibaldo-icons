'use strict';

const { createElement, forwardRef } = require('react');

const BluetoothDots = forwardRef(function BluetoothDots(
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
    createElement('path', {"d":"M8.5 2L8.5 22","key":"0"}),
    createElement('path', {"d":"M2 18L15 6","key":"1"}),
    createElement('path', {"d":"M2 6L15 18","key":"2"}),
    createElement('path', {"d":"M8.5 2L15 6","key":"3"}),
    createElement('path', {"d":"M15 18L8.5 22","key":"4"}),
    createElement('path', {"d":"M18.5 12L18.5 12","key":"5"}),
    createElement('path', {"d":"M15 12L15 12","key":"6"}),
    createElement('path', {"d":"M22 12L22 12","key":"7"})
  );
});

BluetoothDots.displayName = 'BluetoothDots';

module.exports = BluetoothDots;
module.exports.BluetoothDots = BluetoothDots;
module.exports.default = BluetoothDots;
