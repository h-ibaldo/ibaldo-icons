'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowOrbitAxis = forwardRef(function ArrowOrbitAxis(
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
    createElement(Path, {"d":"M9 16L12 19L9 21.5","key":"0"}),
    createElement(Path, {"d":"M12 3L12 3","key":"1"}),
    createElement(Path, {"d":"M12 7L12 7","key":"2"}),
    createElement(Path, {"d":"M12 11L12 11","key":"3"}),
    createElement(Path, {"d":"M17 18.191C19.984 17.152 22 15.219 22 13C22 10.539 19.531 8.43 16 7.504","key":"4"}),
    createElement(Path, {"d":"M8 7.504C4.469 8.43 2 10.539 2 13C2 16.313 6.477 19 12 19","key":"5"})
  );
});

ArrowOrbitAxis.displayName = 'ArrowOrbitAxis';

module.exports = ArrowOrbitAxis;
module.exports.ArrowOrbitAxis = ArrowOrbitAxis;
module.exports.default = ArrowOrbitAxis;
