'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const StopwatchOff = forwardRef(function StopwatchOff(
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
    createElement(Path, {"d":"M19 4L21 6","key":"0"}),
    createElement(Path, {"d":"M10 2L14 2","key":"1"}),
    createElement(Path, {"d":"M12 2L12 5","key":"2"}),
    createElement(Path, {"d":"M4 5L21 21","key":"3"}),
    createElement(Path, {"d":"M19.75 14.953C19.906 14.328 20 13.676 20 13C20 8.582 16.418 5 12 5C11.145 5 10.32 5.137 9.547 5.387","key":"4"}),
    createElement(Path, {"d":"M6.391 7.301C4.914 8.754 4 10.77 4 13C4 17.418 7.582 21 12 21C14.418 21 16.578 19.922 18.043 18.23","key":"5"})
  );
});

StopwatchOff.displayName = 'StopwatchOff';

module.exports = StopwatchOff;
module.exports.StopwatchOff = StopwatchOff;
module.exports.default = StopwatchOff;
