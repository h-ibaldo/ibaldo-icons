'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownFromPointCircle = forwardRef(function ArrowDownFromPointCircle(
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
    createElement(Path, {"d":"M15 19L12 22L9 19","key":"0"}),
    createElement(Path, {"d":"M12 13L12 22","key":"1"}),
    createElement(Path, {"d":"M12 9L12 9","key":"2"}),
    createElement(Path, {"d":"M19 19.117C20.848 17.305 22 14.793 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.793 3.152 17.305 5 19.117","key":"3"})
  );
});

ArrowDownFromPointCircle.displayName = 'ArrowDownFromPointCircle';

module.exports = ArrowDownFromPointCircle;
module.exports.ArrowDownFromPointCircle = ArrowDownFromPointCircle;
module.exports.default = ArrowDownFromPointCircle;
