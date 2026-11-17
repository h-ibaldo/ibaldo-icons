'use strict';

const { createElement, forwardRef } = require('react');

const BluetoothRingNarrow = forwardRef(function BluetoothRingNarrow(
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
    createElement('path', {"d":"M8 2L13 7L8 12L3 7","key":"0"}),
    createElement('path', {"d":"M3 17L8 12L13 17L8 22","key":"1"}),
    createElement('path', {"d":"M8 2L8 22","key":"2"}),
    createElement('path', {"d":"M16.281 15.281C17.316 14.559 18 13.359 18 12C18 10.641 17.316 9.441 16.281 8.719","key":"3"}),
    createElement('path', {"d":"M19.133 18.133C20.883 16.664 22 14.465 22 12C22 9.535 20.883 7.336 19.133 5.867","key":"4"})
  );
});

BluetoothRingNarrow.displayName = 'BluetoothRingNarrow';

module.exports = BluetoothRingNarrow;
module.exports.BluetoothRingNarrow = BluetoothRingNarrow;
module.exports.default = BluetoothRingNarrow;
