'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClipboardCode = forwardRef(function ClipboardCode(
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
    createElement(Path, {"d":"M7 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22","key":"0"}),
    createElement(Path, {"d":"M15 4L18 4C19.105 4 20 4.895 20 6L20 12","key":"1"}),
    createElement(Path, {"d":"M13.883 7L8.117 7C7.5 7 7 6.5 7 5.883L7 3.117C7 2.5 7.5 2 8.117 2L13.883 2C14.5 2 15 2.5 15 3.117L15 5.883C15 6.5 14.5 7 13.883 7Z","key":"2"}),
    createElement(Path, {"d":"M11 16L8 19L11 22","key":"3"}),
    createElement(Path, {"d":"M19 16L22 19L19 22","key":"4"}),
    createElement(Path, {"d":"M14 22L16 16","key":"5"})
  );
});

ClipboardCode.displayName = 'ClipboardCode';

module.exports = ClipboardCode;
module.exports.ClipboardCode = ClipboardCode;
module.exports.default = ClipboardCode;
