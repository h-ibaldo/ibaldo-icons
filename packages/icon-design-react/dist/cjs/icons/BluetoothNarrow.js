'use strict';

const { createElement, forwardRef } = require('react');

const BluetoothNarrow = forwardRef(function BluetoothNarrow(
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
    createElement('path', {"d":"M12 2L17 7L12 12L7 7","key":"0"}),
    createElement('path', {"d":"M7 17L12 12L17 17L12 22","key":"1"}),
    createElement('path', {"d":"M12 2L12 22","key":"2"})
  );
});

BluetoothNarrow.displayName = 'BluetoothNarrow';

module.exports = BluetoothNarrow;
module.exports.BluetoothNarrow = BluetoothNarrow;
module.exports.default = BluetoothNarrow;
