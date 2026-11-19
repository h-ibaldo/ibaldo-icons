'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const EarbudsBluetooth = forwardRef(function EarbudsBluetooth(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M4.5 3C3.117 3 2 4.117 2 5.5L2 15C2 15.551 2.449 16 3 16L4 16C4.551 16 5 15.551 5 15L5 10C6.105 10 7 9.105 7 8L7 5.5C7 4.117 5.883 3 4.5 3Z","key":"0"}),
    createElement(Path, {"d":"M12.5 3C11.117 3 10 4.117 10 5.5L10 15C10 15.551 10.449 16 11 16L12 16C12.551 16 13 15.551 13 15L13 10C14.105 10 15 9.105 15 8L15 5.5C15 4.117 13.883 3 12.5 3Z","key":"1"}),
    createElement(Path, {"d":"M19 10L19 22","key":"2"}),
    createElement(Path, {"d":"M16 13L19 16L22 13L19 10","key":"3"}),
    createElement(Path, {"d":"M19 22L22 19L19 16L16 19","key":"4"})
  );
});

EarbudsBluetooth.displayName = 'EarbudsBluetooth';

module.exports = EarbudsBluetooth;
module.exports.EarbudsBluetooth = EarbudsBluetooth;
module.exports.default = EarbudsBluetooth;
