'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ScissorsWide = forwardRef(function ScissorsWide(
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
    createElement(Path, {"d":"M7.598 16.551C6.77 15.129 4.938 14.645 3.5 15.465C2.066 16.281 1.574 18.098 2.402 19.516C3.23 20.938 5.066 21.422 6.5 20.602C7.938 19.785 8.426 17.969 7.598 16.551Z","key":"0"}),
    createElement(Path, {"d":"M7.598 7.453C6.77 8.871 4.938 9.359 3.5 8.539C2.066 7.719 1.574 5.902 2.402 4.484C3.23 3.066 5.066 2.578 6.5 3.398C7.938 4.219 8.426 6.031 7.598 7.453Z","key":"1"}),
    createElement(Path, {"d":"M3.703 8.645L22 16.852L18.719 17.777C16.406 18.43 13.914 17.852 12.129 16.238Z","key":"2"}),
    createElement(Path, {"d":"M8.676 10.875L12.113 7.773C13.91 6.156 16.422 5.574 18.754 6.234L22 7.152L11.188 12M8.676 13.129L3.703 15.355L7.426 12","key":"3"})
  );
});

ScissorsWide.displayName = 'ScissorsWide';

module.exports = ScissorsWide;
module.exports.ScissorsWide = ScissorsWide;
module.exports.default = ScissorsWide;
