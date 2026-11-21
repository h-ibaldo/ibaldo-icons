'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Tablet = forwardRef(function Tablet(
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
    createElement(Path, {"d":"M7 2L17 2C18.105 2 19 2.895 19 4L19 20C19 21.105 18.105 22 17 22L7 22C5.895 22 5 21.105 5 20L5 4C5 2.895 5.895 2 7 2Z","key":"0"}),
    createElement(Path, {"d":"M13 19L11 19","key":"1"})
  );
});

Tablet.displayName = 'Tablet';

module.exports = Tablet;
module.exports.Tablet = Tablet;
module.exports.default = Tablet;
