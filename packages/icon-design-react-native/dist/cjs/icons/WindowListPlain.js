'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WindowListPlain = forwardRef(function WindowListPlain(
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
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M12 13L17 13","key":"2"}),
    createElement(Path, {"d":"M8 13L7 13","key":"3"}),
    createElement(Path, {"d":"M12 17L17 17","key":"4"}),
    createElement(Path, {"d":"M7 17L8 17","key":"5"})
  );
});

WindowListPlain.displayName = 'WindowListPlain';

module.exports = WindowListPlain;
module.exports.WindowListPlain = WindowListPlain;
module.exports.default = WindowListPlain;
