'use strict';

const { createElement, forwardRef } = require('react');

const BluetoothRectangleBroken = forwardRef(function BluetoothRectangleBroken(
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
    createElement('path', {"d":"M18 22L6 22C4.344 22 3 20.656 3 19L3 5C3 3.344 4.344 2 6 2L18 2C19.656 2 21 3.344 21 5L21 19C21 20.656 19.656 22 18 22Z","key":"0"}),
    createElement('path', {"d":"M17.883 16.117L6.117 7.883","key":"1"}),
    createElement('path', {"d":"M15.414 9.609L17 8.5L12 5L12 7.332","key":"2"}),
    createElement('path', {"d":"M12 12L12 19","key":"3"}),
    createElement('path', {"d":"M12 12L7 15.5","key":"4"}),
    createElement('path', {"d":"M12 19L17 15.5","key":"5"})
  );
});

BluetoothRectangleBroken.displayName = 'BluetoothRectangleBroken';

module.exports = BluetoothRectangleBroken;
module.exports.BluetoothRectangleBroken = BluetoothRectangleBroken;
module.exports.default = BluetoothRectangleBroken;
