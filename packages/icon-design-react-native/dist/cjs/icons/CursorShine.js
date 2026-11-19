'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CursorShine = forwardRef(function CursorShine(
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
    createElement(Path, {"d":"M21.07 13.203L10.219 9.59C9.832 9.457 9.457 9.832 9.59 10.223L13.203 21.066C13.332 21.457 13.848 21.531 14.086 21.199L15.871 18.699L19.172 22L22 19.172L18.699 15.871L21.203 14.086C21.535 13.848 21.457 13.332 21.07 13.203Z","key":"0"}),
    createElement(Path, {"d":"M11 2L11 4","key":"1"}),
    createElement(Path, {"d":"M2 11L4 11","key":"2"}),
    createElement(Path, {"d":"M4.637 4.637L6.051 6.051","key":"3"}),
    createElement(Path, {"d":"M4.637 17.363L6.051 15.949","key":"4"}),
    createElement(Path, {"d":"M15.949 6.051L17.363 4.637","key":"5"})
  );
});

CursorShine.displayName = 'CursorShine';

module.exports = CursorShine;
module.exports.CursorShine = CursorShine;
module.exports.default = CursorShine;
