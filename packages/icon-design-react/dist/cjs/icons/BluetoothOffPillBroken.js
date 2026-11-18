'use strict';

const { createElement, forwardRef } = require('react');

const BluetoothOffPillBroken = forwardRef(function BluetoothOffPillBroken(
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
    createElement('path', {"d":"M12 12L8 15","key":"0"}),
    createElement('path', {"d":"M12 18L16 15","key":"1"}),
    createElement('path', {"d":"M2.285 4.715L21.715 19.285","key":"2"}),
    createElement('path', {"d":"M4.777 6.582C4.285 7.621 4 8.777 4 10L4 14C4 18.418 7.582 22 12 22C15.195 22 17.941 20.125 19.223 17.418","key":"3"}),
    createElement('path', {"d":"M20 13.285L20 10C20 5.582 16.418 2 12 2C10.176 2 8.496 2.617 7.148 3.648","key":"4"}),
    createElement('path', {"d":"M15.215 9.59L16 9L12 6L12 7.18","key":"5"}),
    createElement('path', {"d":"M12 18L12 12","key":"6"})
  );
});

BluetoothOffPillBroken.displayName = 'BluetoothOffPillBroken';

module.exports = BluetoothOffPillBroken;
module.exports.BluetoothOffPillBroken = BluetoothOffPillBroken;
module.exports.default = BluetoothOffPillBroken;
