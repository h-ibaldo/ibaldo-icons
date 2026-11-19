'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const EjectDownSquare = forwardRef(function EjectDownSquare(
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
    createElement(Path, {"d":"M7 7L17 7","key":"0"}),
    createElement(Path, {"d":"M8.164 10.945L15.836 10.945C16.688 10.945 17.152 11.941 16.598 12.59L12.762 17.105C12.363 17.574 11.637 17.574 11.238 17.105L7.402 12.59C6.848 11.941 7.309 10.945 8.164 10.945Z","key":"1"}),
    createElement(Path, {"d":"M22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5Z","key":"2"})
  );
});

EjectDownSquare.displayName = 'EjectDownSquare';

module.exports = EjectDownSquare;
module.exports.EjectDownSquare = EjectDownSquare;
module.exports.default = EjectDownSquare;
