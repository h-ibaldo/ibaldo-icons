'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkXCircleBracket = forwardRef(function LinkXCircleBracket(
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
    createElement(Path, {"d":"M9 12L7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2L9 2","key":"0"}),
    createElement(Path, {"d":"M8 7L16 7","key":"1"}),
    createElement(Path, {"d":"M21.578 9C21.848 8.387 22 7.711 22 7C22 4.238 19.762 2 17 2L15 2","key":"2"}),
    createElement(Path, {"d":"M22 16.5C22 19.535 19.535 22 16.5 22C13.465 22 11 19.535 11 16.5C11 13.465 13.465 11 16.5 11C19.535 11 22 13.465 22 16.5Z","key":"3"}),
    createElement(Path, {"d":"M18 15L15 18","key":"4"}),
    createElement(Path, {"d":"M15 15L18 18","key":"5"})
  );
});

LinkXCircleBracket.displayName = 'LinkXCircleBracket';

module.exports = LinkXCircleBracket;
module.exports.LinkXCircleBracket = LinkXCircleBracket;
module.exports.default = LinkXCircleBracket;
