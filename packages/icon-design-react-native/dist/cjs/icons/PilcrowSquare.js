'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PilcrowSquare = forwardRef(function PilcrowSquare(
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
    createElement(Path, {"d":"M12 18L12 6L10.5 6C8.566 6 7 7.566 7 9.5C7 11.434 8.566 13 10.5 13L12 13","key":"0"}),
    createElement(Path, {"d":"M16 6L16 18.102","key":"1"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"2"})
  );
});

PilcrowSquare.displayName = 'PilcrowSquare';

module.exports = PilcrowSquare;
module.exports.PilcrowSquare = PilcrowSquare;
module.exports.default = PilcrowSquare;
