'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CursorRectangleDashed = forwardRef(function CursorRectangleDashed(
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
    createElement(Path, {"d":"M16.258 15.883L13.895 16.703L15.859 20.305L12.77 21.988L10.809 18.387L8.836 19.93C8.496 20.195 8 19.953 8 19.523L8 10.52C8 10.109 8.453 9.859 8.797 10.082L16.367 14.957C16.73 15.191 16.664 15.738 16.258 15.883Z","key":"0"}),
    createElement(Path, {"d":"M2 4L2 3C2 2.445 2.449 2 3 2L4 2","key":"1"}),
    createElement(Path, {"d":"M20 2L21 2C21.551 2 22 2.445 22 3L22 4","key":"2"}),
    createElement(Path, {"d":"M8 2L10 2","key":"3"}),
    createElement(Path, {"d":"M14 2L16 2","key":"4"}),
    createElement(Path, {"d":"M4 16L3 16C2.449 16 2 15.555 2 15L2 14","key":"5"}),
    createElement(Path, {"d":"M20 16L21 16C21.551 16 22 15.555 22 15L22 14","key":"6"}),
    createElement(Path, {"d":"M2 10L2 8","key":"7"}),
    createElement(Path, {"d":"M22 10L22 8","key":"8"})
  );
});

CursorRectangleDashed.displayName = 'CursorRectangleDashed';

module.exports = CursorRectangleDashed;
module.exports.CursorRectangleDashed = CursorRectangleDashed;
module.exports.default = CursorRectangleDashed;
