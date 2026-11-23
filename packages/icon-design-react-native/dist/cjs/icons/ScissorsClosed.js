'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ScissorsClosed = forwardRef(function ScissorsClosed(
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
    createElement(Path, {"d":"M7.598 10.5C6.77 11.938 4.934 12.426 3.5 11.598C2.066 10.77 1.574 8.938 2.402 7.5C3.23 6.066 5.066 5.574 6.5 6.402C7.934 7.23 8.426 9.066 7.598 10.5Z","key":"0"}),
    createElement(Path, {"d":"M3.5 11.598L9 15","key":"1"}),
    createElement(Path, {"d":"M9 15L19.09 9","key":"2"}),
    createElement(Path, {"d":"M15 16L15 16","key":"3"}),
    createElement(Path, {"d":"M12 16L12 16","key":"4"}),
    createElement(Path, {"d":"M9 16L9 16","key":"5"}),
    createElement(Path, {"d":"M6 16L6 16","key":"6"}),
    createElement(Path, {"d":"M3 16L3 16","key":"7"}),
    createElement(Path, {"d":"M18 16L18 16","key":"8"}),
    createElement(Path, {"d":"M21 16L21 16","key":"9"})
  );
});

ScissorsClosed.displayName = 'ScissorsClosed';

module.exports = ScissorsClosed;
module.exports.ScissorsClosed = ScissorsClosed;
module.exports.default = ScissorsClosed;
