'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DocumentListPlusCircle = forwardRef(function DocumentListPlusCircle(
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
    createElement(Path, {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"0"}),
    createElement(Path, {"d":"M17 15L17 19","key":"1"}),
    createElement(Path, {"d":"M19 17L15 17","key":"2"}),
    createElement(Path, {"d":"M9 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 9","key":"3"}),
    createElement(Path, {"d":"M6 7L6 7","key":"4"}),
    createElement(Path, {"d":"M16 7L9 7","key":"5"}),
    createElement(Path, {"d":"M6 12L6 12","key":"6"}),
    createElement(Path, {"d":"M17 12L9 12","key":"7"}),
    createElement(Path, {"d":"M6 17L6 17","key":"8"}),
    createElement(Path, {"d":"M12 17L9 17","key":"9"})
  );
});

DocumentListPlusCircle.displayName = 'DocumentListPlusCircle';

module.exports = DocumentListPlusCircle;
module.exports.DocumentListPlusCircle = DocumentListPlusCircle;
module.exports.default = DocumentListPlusCircle;
