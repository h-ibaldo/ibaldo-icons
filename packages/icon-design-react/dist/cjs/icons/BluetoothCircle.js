'use strict';

const { createElement, forwardRef } = require('react');

const BluetoothCircle = forwardRef(function BluetoothCircle(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M12 6L12 18","key":"1"}),
    createElement('path', {"d":"M8 9L12 12L16 9L12 6","key":"2"}),
    createElement('path', {"d":"M12 18L16 15L12 12L8 15","key":"3"})
  );
});

BluetoothCircle.displayName = 'BluetoothCircle';

module.exports = BluetoothCircle;
module.exports.BluetoothCircle = BluetoothCircle;
module.exports.default = BluetoothCircle;
