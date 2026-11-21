'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const IdCardClipTall = forwardRef(function IdCardClipTall(
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
    createElement(Path, {"d":"M13 5L18 5C19.105 5 20 5.895 20 7L20 20C20 21.105 19.105 22 18 22L6 22C4.895 22 4 21.105 4 20L4 7C4 5.895 4.895 5 6 5L9.5 5","key":"0"}),
    createElement(Path, {"d":"M9.5 13.5C9.5 12.121 10.621 11 12 11C13.379 11 14.5 12.121 14.5 13.5C14.5 14.879 13.379 16 12 16C10.621 16 9.5 14.879 9.5 13.5Z","key":"1"}),
    createElement(Path, {"d":"M10 8L14 8","key":"2"}),
    createElement(Path, {"d":"M7.004 1.996L12 8","key":"3"}),
    createElement(Path, {"d":"M14 5L17 2","key":"4"}),
    createElement(Path, {"d":"M7 19C7 17.344 8.344 16 10 16L14 16C15.656 16 17 17.344 17 19","key":"5"})
  );
});

IdCardClipTall.displayName = 'IdCardClipTall';

module.exports = IdCardClipTall;
module.exports.IdCardClipTall = IdCardClipTall;
module.exports.default = IdCardClipTall;
