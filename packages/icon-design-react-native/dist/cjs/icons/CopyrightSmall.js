'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CopyrightSmall = forwardRef(function CopyrightSmall(
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
    createElement(Path, {"d":"M21 12C21 16.973 16.973 21 12 21C7.027 21 3 16.973 3 12C3 7.027 7.027 3 12 3C16.973 3 21 7.027 21 12Z","key":"0"}),
    createElement(Path, {"d":"M15 9.379C14.266 8.543 13.203 8 12 8C9.789 8 8 9.793 8 12C8 14.211 9.789 16 12 16C13.203 16 14.266 15.461 15 14.621","key":"1"})
  );
});

CopyrightSmall.displayName = 'CopyrightSmall';

module.exports = CopyrightSmall;
module.exports.CopyrightSmall = CopyrightSmall;
module.exports.default = CopyrightSmall;
